const express = require('express');
const profile = require('../models/Profile');
const router = express.Router();


router
    .get("/", (req, res) => res.send({
        Profile: profile.Profile[req.userId],
        Goals: profile.Goals[req.userId],
        Exercise: profile.exercise
    }))
    .post('/editgoals', (req, res) => res.send(
        profile.editGoals(req.userId, req.body.name, req.body.time)
    ))
    .post('/addexercise', (req, res) => res.send(
       profile.addExercise(req.userId, req.body.name, req.body.time)
    ))
    
module.exports = router;