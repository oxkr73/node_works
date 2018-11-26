const mongoose = require("../db").mongoose;

const Schema = mongoose.Schema;

const projectSchema = new Schema({
  title: String,
  unit: String
});

const studentSchema = new Schema({
  name: String,
  age: Number,
  projects: [projectSchema]
});

let Student = mongoose.model("student", studentSchema);
let Project = mongoose.model("project", projectSchema);

module.exports = {
  Student: Student,
  Project: Project
};
