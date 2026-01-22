
const express = require('express');
const router = express.Router();
const {userList, userDetails, deleteUser, editUser, createNewUser} = require('../controllers/User');



router.post("/create", createNewUser);
router.get("/list", userList);
router.get("/details/:id", userDetails);
router.delete("/delete/:id", deleteUser);
router.put("/edit/:id", editUser);

module.exports = router;