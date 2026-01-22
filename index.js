require('dotenv').config(); 
const express = require("express");
const {connectMongoDb} = require("./connection");

const{logReqRes} = require("./middleware");

const userRouter = require('./routes/user');


const app = express();
const PORT = 8000;

//connection
connectMongoDb('mongodb://127.0.0.1:27017/youtube-app-3').then(() => 
    console.log("Mongodb connected!")
);
console.log("test", process.env.MONGO_URL);
//middleware-plugin
app.use(express.urlencoded({ extended : false}));
app.use(logReqRes("log.txt"));

//routes~
app.use("/api/users" , userRouter);


//port
app.listen(PORT, () => console.log(`server started at PORT:${PORT}`));
