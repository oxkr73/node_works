const mongoose = require('mongoose');
const Schema = mongoose.Schema


projectSchema = new Schema({
    title:String,
    unit: String

})

studentSchema = new Schema({
    n:{
        type:String,
        required:[true,'el campo name es obligatorio'],
        alias:'name'
    },
    age:{
        type:Number,
        validate:[function(age){
            return age>=0&age<=99
              
            
        },
        'edad entre 0-99']
    },
    projects:[projectSchema]

})
studentSchema
Student = mongoose.model('student',studentSchema)
Project = mongoose.model('project',projectSchema)

module.exports = {
    Student, Project
}