const connectionDB = require('../config/connection.js')
const schema = require('../models/schema')
const Student = schema.StudentMod
const Teacher = schema.TeacherMod
const Project = schema.Project

let studentsController = {
    index:(req,res)=>{
        Student.find({})
            .then(students=>{
                res.json(students)
                console.log(students)
            })
            .catch(console.error.bind(console, 'error: '))
        
    },

    show: (req,res)=>{
        console.log(req.params.name)
        Student.find({n:req.params.name})
            .populate('projects','title -_id') 
            .exec((error, student)=>{
                            if(error) console.error.bind(console,'error: ')
                            res.json(student) 
                        })
    },

    create: async function (req,res){
        switch(req.body.role)
        {
            case 'student':
                student = new Student({name: req.body.name, password: req.body.password, age:req.body.age})
                for(project of req.body.projects)
                {
                    projectStudent= new Project(project)
                    await Project.create(projectStudent)
                        .then((project)=>{
                    //        console.log('Añadido proyecto: '+project._id)
                            student.projects.push(project._id)
                    //        console.log('Proyecto dentro del array' +student.projects)
                            return student
                        })
                        .catch((error)=>
                            res.json(error.message)
                        )
                }
        
            // console.log(student.name + ' '+student.projects);
                await Student.create(student)
                    .then((stu)=>{
                        Student.find({n:stu.name})
                        .populate('projects','title -_id') 
                        .exec((error, st)=>{
                                        if(error) console.error.bind(console,'error: ')
                                        res.json(st) 
                                    })
            
            //             console.log(student)
                        
                        console.log(stu.name+ ' desde dentro')
                    })
                    .catch((error)=>
                        res.json(error.message)
                    );
            break;
            case 'teacher':
                pass = Buffer.from(req.body.password).toString('base64')
                teacher = new Teacher({name: req.body.name, password: pass, age:req.body.age, subject:req.body.subject})
                await Teacher.create(teacher)
                    .then((t)=>{res.json(t) 
                    console.log(t.name+ ' desde dentro')
                    })
                    .catch((error)=>
                        res.json(error.message)
                    );
            break;
        }; 
    },

    delete: async function(req,res){
        await Student.findOne({n:req.body.name})
            .then((student)=>{
                console.log(student._id+' encontrado');
                stu= new Student(student)
                return stu
            })
            .catch((err)=>console.log(err))

        await stu.remove()
            .then((student)=>{
                res.json(student);
                console.log(student._id+'borrado')
                })
            .catch((err)=>console.log(err))
/*         .then(student=>{res.json(student)})
        .catch(console.error.bind(console,'error: ')) */
    },

    update: (req,res)=>{
        Student.update({name:req.body.oldName}, {name:req.body.name}, {new:true})
        .then((student)=>{return student})
        .catch(console.error.bind(console,'error: '))
    }

}



module.exports = studentsController