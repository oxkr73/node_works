const express = require('express')
const studentsController = require('../controllers/studentsController')
router = express.Router();


router.get('/students', studentsController.index)
//router.get("/students/new", studentsController.new)
router.post("/students", studentsController.create)
router.get("/students/:id", studentsController.show)
//router.get("/students/:id/edit", studentsController.edit)
router.put("/students/:id", studentsController.update)
router.delete('/students',studentsController.delete)
//router.get("/students/:id/delete", studentsController.delete)
//router.post("/students/:id/projects", studentsController.addProject)
//router.delete("/students/:studentId/projects/:id", studentsController.removeProject)

module.exports = router