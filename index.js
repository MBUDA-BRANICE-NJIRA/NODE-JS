const express =require('express');
const routes = require('./routes/studentRoute');
const { AddStudent } = require('./controller/studentController');
const createError = require('http-errors');
const app = express();
require('dotenv').config();
require('./helpers/init_mongodb');

app.use(express.json());

// app.use("/api/Student",studentRoute);
// app.use("/api/auth", authRoute),

app.use(routes);

//handling 404 error
app.use(async(req,res,next)=>{
    //next(createError(404,"Not found"));
    next(createError.NotFound());
});

//Error handler
app.use((err,req,res,next)=>{
    res.status(err.status || 500);
    res.send({
        error:{
            status:err.status || 500,
            message: err.message,
        },
    });
});

app.listen(process.env.port || 4000, function(){
    console.log('Now listening for requests on: http://localhost:4000')
}) ;
