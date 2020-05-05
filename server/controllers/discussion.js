const express = require('express');
const router = express.Router();
const Meeting = Require('../models/MeetingBoard');
router
    .get ("/", (req,res)=> res.send({
        Meeting:Meeting.Meeting}))
        .post('/addPost',(req,res)=>res.send(
            MeetingBoard.addPost(req.body.name, req.body.profilePic, req.body.post)
        ))
        .post('/removePost',(req,res)=>res.send(
            MeetingBoard.remove(Postreq.body.i)
        ))
        module.exports = router;
        