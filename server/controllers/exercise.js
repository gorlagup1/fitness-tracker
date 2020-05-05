const express = require('express');
const router = express.Router();
const Exercise = require('../models/Exercise');
router
.get("/",(req,res)=> res.send({
    Exercise: Exercise.exerciseList
}))
.post('/addExercise',(req,res)=>res.send(
    Exercise.addExercise(req.body.newExercise)
))
.post('/removeExercise',(req,res)=>res.send(
    Exercise.removeExercise(req.body.i)
))
mpodule.exports = router;
