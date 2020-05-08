const express = require('express');
const profile = require('../models/Profile');
const router = express.Router();


router
    .get("/", (req, res) => res.send({
        Profile: profile.Profile[req.currentuser],
        Goals: profile.Goals[req.currentuser],
        Exercise: profile.Exercise[req.currentuser]
    }))
    .post('/editprofile', (req, res) => res.send(
        profile.editprofile(req.userId, req.body.name, req.body.time)
    ))
    .post('/addexercise', (req, res) => res.send(
       profile.addExercise(req.userId, req.body.name, req.body.time)
    ))
    
module.exports = router;