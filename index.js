require('dotenv').config(); 
const express = require("express");
const {connectMongoDb} = require("./connection");

const{logReqRes} = require("./middleware");

const routes = require('./routes');


const app = express();
const PORT = 8000;

//connection

connectMongoDb();
// connectMongoDb('mongodb://127.0.0.1:27017/youtube-app-3').then(() => 
//     console.log("Mongodb connected!")
// );
console.log("test", process.env.MONGO_URL);

//middleware-plugin
app.use(express.json());
app.use(express.urlencoded({ extended : false}));
app.use(logReqRes("log.txt"));

// app.get("/test", (req,res)=>{
//     res.send("api working");
// }); for router test
//routes~
app.use("/api" , routes);


//port
app.listen(PORT, () => console.log(`server started at PORT:${PORT}`))

// process.on("uncaughtException", err => {
//   console.error("UNCAUGHT:", err);
// });

