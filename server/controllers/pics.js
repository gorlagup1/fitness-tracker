const express = require('express');
const pics = require('../models/Pics');
const router = express.Router();
router.get("/",(req,res)=> res.setHeader({
    Pics:pics.Pics}))
    module.exports = router;
