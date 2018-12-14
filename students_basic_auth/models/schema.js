const mongoose = require('mongoose');
const Schema = mongoose.Schema

//creamos el campo discriminador dentro de options:
const options = {
    discriminatorKey: 'role',
    collection: 'persona'
  };

//Creamos el schema base:
personSchema = new Schema({
    n:{
        type:String,
        required:[true,'el campo name es obligatorio'],
        alias:'name'
    },
    password:{
        type:String,
        required:true
    },
    age:{
        type:Number,
        validate:[function(age){
            return age>=0&age<=99
              
            
        },
        'edad entre 0-99']
    },
}, options)

//Schema projects
projectSchema = new Schema({
    title:String,
    unit: String
})

//Creamos el modelo base para persona

const Person = mongoose.model('person',personSchema);

//Generamos el schema de student
studentSchema = new Schema({
    projects:[{type: Schema.ObjectId, ref:'Project'}]
})
const Student= Person.discriminator('Student', studentSchema);

//Generamos el schema de teacher
teacherSchema = new Schema({
    subject:String
})
const Teacher= Person.discriminator('Teacher', teacherSchema);

//Middlewares sobre persona
personSchema.pre('save', async function() {
    this.name = this.name.toUpperCase()
    this.password = Buffer.from(this.password).toString('base64')
    //console.log(this.name)
  });

personSchema.post('save', function(doc) {
    console.log('%s has been saved', doc._id);
  }); 
  
personSchema.post('remove', function(doc) {
    console.log('%s has been remove', doc._id);
  }); 
  
Project = mongoose.model('Project',projectSchema)
StudentMod = mongoose.model('Student')
TeacherMod = mongoose.model('Teacher')

module.exports = {
    StudentMod, TeacherMod, Project, Person
}