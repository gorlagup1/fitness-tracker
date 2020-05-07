const express = require('express');

const router = express.Router();
const users = require('../models/users');
const app = express.Router();
router
.get("/",(req,res)=> res.send({
    Exercise: Exercise.exercise
}))
.post('/addExercise',(req,res)=>res.send(
    Exercise.addExercise(req.body.newExercise)
))
.post('/removeExercise',(req,res)=>res.send(
    Exercise.removeExercise(req.body.i)
))
module.exports = router;
