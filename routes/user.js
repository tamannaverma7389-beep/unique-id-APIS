const express = require('express');
const router = express.Router();
const {userList, userDetails, deleteUser, editUser, createNewUser} = require('../controllers/user');


router.get("/list", userList);
router.get("/details/:id", userDetails);
router.post("/create", createNewUser);
router.put("/edit/:id", editUser);
router.delete("/delete/:id", deleteUser);

module.exports = router;

// router.get("/ping", (req, res) => {
//   res.send("USER ROUTER WORKING");
// });  user router working

