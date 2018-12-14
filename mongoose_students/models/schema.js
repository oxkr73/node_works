const mongoose = require("mongoose");
const Schema = mongoose.Schema;

projectSchema = new Schema({
  title: String,
  unit: String
});

/*
studentSchema = new Schema({
  n: {
    type: String,
    required: [true, "el campo name es obligatorio"],
    alias: "name"
  },
  age: {
    type: Number,
    validate: [
      function(age) {
        return (age >= 0) & (age <= 99);
      },
      "edad entre 0-99"
    ]
  },
  projects: [projectSchema]
});

studentSchema.pre("save", async function() {
  await toUppercase();
});

function toUppercase() {
  student["n"] = student.n.toUpperCase();
}

studentSchema.post("remove", function(doc) {
  console.log(doc);
});
*/

const options = { discriminatorKey: "role" };
const personSchema = new Schema(
  {
    n: {
      type: String,
      required: [true, "el campo name es obligatorio"],
      alias: "name"
    }
  },
  options
);

Person = mongoose.model("person", personSchema);

const Student = Person.discriminator(
  "Student",
  new mongoose.Schema({
    age: {
      type: Number,
      validate: [
        function(age) {
          return (age >= 0) & (age <= 99);
        },
        "edad entre 0-99"
      ]
    },
    projects: [projectSchema]
  })
);

const Teacher = Person.discriminator(
  "Teacher",
  new mongoose.Schema({
    subject: {
      type: String,
      required: true
    }
  })
);

Project = mongoose.model("project", projectSchema);

StudentMod = mongoose.model("Student");
TeacherMod = mongoose.model("Teacher");

module.exports = {
  Student,
  Teacher,
  Person,
  Project
};
