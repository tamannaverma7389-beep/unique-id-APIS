const express = require("express");
const {connectMongoDb} = require("./connection");

const{logReqRes} = require("./middleware");

const userRouter = require('./routes/user');

const app = express();
const PORT = 8000;

//connection
connectMongoDb('mongodb://127.0.0.1:27017/youtube-app-1').then(() => 
    console.log("Mongodb connected!")
);

//middleware-plugin
app.use(express.urlencoded({ extended : false}));
app.use(logReqRes("log.txt"));

//routes
app.use("/api/users" , userRouter);

//port
app.listen(PORT, () => console.log(`server started at PORT:${PORT}`));


// const mongoose = require("mongoose");
// const fs = require("fs");
// const users = require("./MOCK_dataJSON (1).json");
//connection
// mongoose
// .connect('mongodb://127.0.0.1:27017/youtube-app-1')
// .then(() => console.log("MongoDB  connected"))
// .catch((err) => console.log("Mongo error", err ));

// //Schema
// const userSchema = new mongoose.Schema({
//     firstName:{
//         type: String,
//         required:true,
//     },
//     lastNAme: {
//         type:String,
//     },
//     email:{
//         type: String,
//         required: true,
//         unique: true,
//     },
//     jobTitle: {
//         type: String,
//     },
//     gender: {
//         type: String,
//     },
// },
// { timestamps: true}
// );

// const User = mongoose.model('user' , userSchema);

//middleware  - plugin
// app.use(express.json());
// app.use((req, res, next) => {
//     fs.appendFile('log.txt' , `${Date.now()}: ${req.ip}: ${req.method}: ${req.path}\n`, (err, data) => {
//       next();
//     });
// });


// app.get("/users" , async (req,res) => {
//     const allDbUsers = await User.find({});
//     const html = `
//     <ul>
//     ${allDbUsers.map((user) => `<li>${user.firstName} - ${user.email}</li>`).join("")}
//     </ul>
// `;
// res.send(html);
// });

// // //REST API
// app.get("/api/users" , async (req,res) => {
//     const allDbUsers = await User.find({});
//     // console.log(req.headers);
//     res.setHeader("X-MYName" , "Tannuverma" );   //custom headers
//     return res.json(allDbUsers);
//     //return res.json(users);
// });
// app       ///11223344
// .route("/api/users/:id")
// .get(async (req,res) => {
//     // const id = Number(req.params.id);
//     //  const user = users.find((user) => user.id === id);
//     const user = await User.findById(req.params.id);
//     if(!user) return res.status(404).json({error: "user not found"});
//      return res.json(user);
//  })
//  .patch(async (req,res)=> {
//      //Edit user the id
//     await User.findByIdAndUpdate(req.params.id , {firstName:"changed"});
//      return res.json({status: 'success'})
//  })
//  .delete(async (req,res)=> {
//      //Edit user the id
//     await User.findByIdAndDelete(req.params.id);
//      return res.json({status: 'success'})
//  });


// .delete((req,res)=> {
//     //delete user the id
//     // return res.json({status: 'pending'});
//      const body = req.body;
//       users.pop({...body, id: users.length -1 });
//      fs.writeFile('./MOCK_dataJSON (1).json' , JSON.stringify(users) , (err,data)=> {         
//         return res.json({ status: "success" , id:users.length - 1});
//      });
//  });
//  .patch((req,res)=> {
//     //Edit user the id
//     const {id} = req.params;
//     const body = req.body;
//     users.push({...body, id: users });
//       fs.writeFile('./MOCK_dataJSON (1).json' , JSON.stringify(users) , (err,data)=> {
//          return res.json({ status: "success" , id: user });
//       });
//     // return res.json({status: 'pending'})
//  })

// app.post('/api/users' , async (req,res) => {
//     const body = req.body;
//     if (
//         !body ||
//         !body.first_name ||
//         !body.last_name ||
//         !body.email ||
//         !body.gender ||
//         !body.job_title 
//     )  {
//         return res.status(400).json({msg : "All fields are req..."})
//     }
//     const result = await User.create({
//       firstName : body.first_name,
//       lastName : body.last_name,
//       email : body.email,
//       gender : body.gender,
//       jobTitle : body.job_title ,
//     });
//     // console.log("result" , result);
//     return res.status(201).json({ msg : "success"});
//     });
//      //TODO create new user
    //  const body = req.body;
    //  users.push({...body, id: users.length + 1});
    //  fs.writeFile('./MOCK_dataJSON (1).json' , JSON.stringify(users) , (err,data)=> {
    //     return res.status(201).json({ status: "success" , id:users.length + 1});
    //  });
    //  console.log("body" , body);               //2222
    //  return res.json({ status: "pending"});   //11,,,2222
   ////  111,222222,33333




// app.post('/api/users' , (req,res) => {
//     //TODO create new user
//     return res.json({ status: "pending"});
// });

// app.patch('/api/users/:id' , (req,res) => {
//     //TODO Edit the user with id
//     return res.json({ status: "pending"});
// });

// app.delete('/api/users/:id' , (req,res) => {
//     //TODO Edit the user with id
//     return res.json({ status: "pending"});
// });
// app.get("/api/users/:id" , (req,res) => {
//     const id = Number(req.params.id);
//     const user = users.find((user) => user.id === id);
//     return res.json(user);
// });

