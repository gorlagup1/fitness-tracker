const express=require('express');
const wight = require('../models/Weight');
const router = express.Router();
router
.get('/',(req,res)=> 
{
    res.send({
        Weight: weight.Weights
    })
    .post('/addWeight',(req,res)=> res.send(
        weight.addWeight(req.body.date, req.body.weight)
        ))
        .post('/removeWeight',(req,res)=>res.send(
            weight.removeWeight(req.body.i)
        ))
});
module.exports = router;
