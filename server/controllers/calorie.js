
const express = require('express');

const calorie = require('../models/Calorie');

const router = express.Router();

router.use(function(req, res, next) {
    req.currentuser = calorie.getUser(req.userId)
    next();
});

router
    .get("/", (req, res) => res.send({
        Calorie: calorie.Calorie[req.currentuser]
    }) )
    .post("/add", (req, res) => res.send(
        //remember to change userid later to safer method
        calorie.add(req.userId, req.body.date, req.body.newFoodName, req.body.newCalorie, req.body.newProtein, req.body.newCarbs, req.body.newFat)
    ) )
    .post("/addnutrients", (req, res) => res.send(
        //remember to change userid later to safer method
        calorie.addnutrients(req.userId, req.body.newCalorie, req.body.newProtein, req.body.newCarbs, req.body.newFat)
    ) )

module.exports = router