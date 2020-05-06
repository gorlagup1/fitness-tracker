const express = require = require('express');
const path = require('path');

const picsController = require('./controllers/pics');
const profileController = require('./controllers/profile');
const aboutController = require('./controller/about');
const exerciseController = require('./controller/exercise');
const foodListController = require('./controller/foodList');
const loginController = require('./controller/login');
const weightController = require('./controller/users');
const meetingBoardController = require('./controller/meetingBoard');
const usersController = require('./controller/users');

const app = express();
const port = 400;
app.use(function(req,res, next){
    res.header("Access-Control-Allow-Origin","*");
    res.header("Acess-Control-Allow-Headers","Origin, x-Requeted-With, Content-Type, Accept, Authorization");
    next();
});
app.user(function(req, res, next){
    const arr = (req.headers.authorization || "").split(" ");
    if(arr.length > 1 && arr[1] !=null){
        req.userId = +arr[1];
    }
    next();
});


app.use(express.json())
.use(express.urlencoded({extended: true }))
.use(excpress.static(_dirname + '/../client/dist'))

.use('/',picsController)
.use('/profile', profileController)
.use('/about', aboutController)
.use('/exercise', exerciseController)
.use('/users', usersController)
.use('/meetingboard', meetingboardController)
.use('/weight', weightController)
.use('/login', loginController)
.use('/food', foodListController)
.use('/about', aboutController)


.use((err,req,res,next)=>{
    console.log(err);
    const errorCode = err.code || 500;
    res.status(errorCode).send({message:err.message });
})
app.listen(port, () => console.log('Listening at http://localhost:$(port}'));

