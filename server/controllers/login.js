const express = require('express');
const users = require('../models/Users');
const router = express.Router();
router.post('/',(req,res)=>{
    try{
        const user = users.Login(req.body.email, req.body.username, req.body.password, req.body.contactno);
        res.send({...user, Password:underfined});
    }catch(error){
        res.status(401).send({message:error.message});
    }
})
module.exports=router;

    