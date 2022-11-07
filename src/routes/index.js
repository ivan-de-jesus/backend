const { Router } = require("express");
const router = Router();
//const faker = require('faker')
const Student = require("../models/students");
const Exercises = require("../models/exercises");
const { model } = require("mongoose");


/**********************/
/****Alumnos**********/
/********************/

//Ruta para agregar un nuevo alumno
router.post("/create", (req, res) => {
  Student.create({
    name: req.query.name,
    albumNumerus: req.query.albumNumerus,
    gradus: req.query.gradus,
    group: req.query.group,
    age: req.query.age,
    pass: req.query.pass,
  });
  console.log("respuesta", req.query.name);
});

//Ruta para eliminar alumno
router.get("/delete/:id", async (req, res) => {
  const {id} = req.params;
 await Student.findByIdAndRemove(id);
});

//Ruta para listar todos los alumnos
router.get("/students", async (req, res) => {
  const students = await Student.find();
  res.json(students);
});


/*************************/
/****Ejercicios**********/
/************************/

router.post("/addExercises", (req, res) => {
  Exercises.create({
    number: req.query.number,
    exercise: req.query.exercise,
    instruction: req.query.instruction,
    help: req.query.help
    
  });
  console.log("respuesta", req.query.name);
});
router.delete("/addExercises", (req, res) => {
  Exercises.create({
    number: req.query.number,
    exercise: req.query.exercise,
    instruction: req.query.instruction,
    help: req.query.help
    
  });
  console.log("respuesta", req.query.name);
});

router.get("/exercises", async (req, res) => {
  const exercises = await Exercises.find();
  res.json(exercises);
});
module.exports = router;
