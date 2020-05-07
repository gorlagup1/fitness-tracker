const express = require('express');
const path = require('path');

const picsController = require('./controllers/pics');
const usersController = require('./controllers/users');
const exerciseController = require('./controllers/exercise');
const loginController = require('./controllers/login');
const profileController = require('./controllers/profile');
const aboutController = require('./controllers/about');
const calorieController = require('./controllers/calorie');
const foodListController = require('./controllers/food');

const app = express();
const port = 3000;

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    next();
});

app.use(function(req, res, next) {
    const arr = (req.headers.authorization || "").split(" ");
    if(arr.length > 1 && arr[1] != null){
        req.userId = +arr[1];
    }
    next();
});

app
    .use(express.json())
    .use(express.urlencoded({ extended: true }))
    .use(express.static(__dirname + '/../client/dist'))
    
    .use('/', picsController)
    .use('/users', usersController)
    .use('/exercise', exerciseController)
    .use('/profile', profileController)
    .use('/social', loginController)
    .use('/calorie', calorieController)
    .use('/liquid', foodListController)

    /*.use((req, res) => {
        const homePath = path.join(__dirname , '/../dist/index.html');
        res.sendFile(homePath);
    }) */
    .use((err, req, res, next) => {
        console.log(err);
        const errorCode = err.code || 500;
        res.status(errorCode).send({ message: err.message})
    })

app.listen(port, () => console.log(`Listening at http://localhost:${port}`));

