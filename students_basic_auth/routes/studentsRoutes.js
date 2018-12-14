const express = require('express')
const studentsController = require('../controllers/studentsController')
const auth = require('../controllers/auth')
router = express.Router();

//router.all('/students',auth)
router.get('/students', auth, studentsController.index)
//router.get("/students/new", studentsController.new)
router.post("/students", studentsController.create)
router.get("/students/:name", studentsController.show)
//router.get("/students/:id/edit", studentsController.edit)
router.put("/students/:id", studentsController.update)
router.delete('/students',studentsController.delete)
//router.get("/students/:id/delete", studentsController.delete)
//router.post("/students/:id/projects", studentsController.addProject)
//router.delete("/students/:studentId/projects/:id", studentsController.removeProject)

module.exports = router