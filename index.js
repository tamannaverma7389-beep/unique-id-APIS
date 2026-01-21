const express = require("express");
const {connectMongoDb} = require("./connection");

const{logReqRes} = require("./middleware");

const addressRouter = require('./routes/Address');

const app = express();
const PORT = 8000;

//connection
connectMongoDb('mongodb://127.0.0.1:27017/youtube-app-2').then(() => 
    console.log("Mongodb connected!")
);
//middleware-plugin
app.use(express.urlencoded({ extended : false}));
app.use(logReqRes("log.txt"));

//routes
app.use("/api/address" , addressRouter);

//port
app.listen(PORT, () => console.log(`server started at PORT:${PORT}`));
