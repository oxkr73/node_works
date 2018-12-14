'use strict'

const mongoose = require('mongoose')
const Schema = mongoose.Schema
const bcrypt = require('bcrypt')
const crypto = require('crypto')

const UserSchema = new Schema({
  email: { type: String, unique: true, required:true, lowercase: true },
  displayName: String,
  avatar: String,
  password: { type: String, select: false },
  signupDate: { type: Date, default: Date.now() },
  lastLogin: Date
})

UserSchema.pre('save', function(next){
    let user = this
    bcrypt.genSalt(10)
        .then((salt)=>{bcrypt.hash(user.password, salt)
        .then((hash)=>{ user.password = hash; next()})})
        .catch((err)=>{return next(err)})

  })


UserSchema.methods.gravatar = function () {
  if (!this.email) return `https://gravatar.com/avatar/?s=200&d=retro`

  const md5 = crypto.createHash('md5').update(this.email).digest('hex')
  return `https://gravatar.com/avatar/${md5}?s=200&d=retro`
}

module.exports = mongoose.model('User', UserSchema)
