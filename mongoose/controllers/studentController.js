function studentController() {
  const mongoose = require("../db").mongoose;
  const Student = require("../models/schema").Student;

  this.getAllStudents = function(req, res, next) {
    Student.find({}, function(err, result) {
      if (err) {
        console.log(err);
        return res.send({ error: err });
      } else {
        return res.send({ students: result });
      }
    });
  };

  this.insertStudent = function(student) {
    Student.create(student, (err, student) => {
      if (err) {
        console.log(err);
      } else console.log(student);
    });
  };
  return this;
}

module.exports = new studentController();

/* let pepe = new Student({name:'pepe', age:25})
let project1 = new Project({title:'mongoose',unit:'5'}) */

//pepe.projects.push(project1)

/* Student.create({name:'pepe', age:25, projects:[{title:'mongoose',unit:'5'}]},(err,student)=>{
    if (err){
        console.log(err);}
    else
        console.log(student)

})
/*  */

/* pepe.save((err,student)=>{
    if (err){
        console.log(err);}
    else
        console.log(student)

})

project1.save((err,project)=>{
    if (err){
        console.log(err);}
    else
        console.log(project)

}) */
