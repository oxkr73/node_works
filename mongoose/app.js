const express = require("express");
const app = express();
const body = require("body-parser");

const studentCtrl = require("./controllers/studentController");

/* const Dog = mongoose.model('Dog', { name: String });

const kitty = new Dog({ name: 'Zildjian' });
kitty.save().then(() => console.log('guau')); */

//si va dentro de una funcion REQ,RES no se muestra el resultado
app.get("/", studentCtrl.getAllStudents);

app.post("/", (req, resp) => {
  const name = req.params.name;
  const projects = req.params.projects;
  let student = { name: name, projects: [projects] };

  insertStudent(student);
});

app.listen(3000, function() {
  console.log("Example app listening on port 3000!");
});
