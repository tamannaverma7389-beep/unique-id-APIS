const express = require("express");
const {handleGetAllAddress,
    handleCreateNewAddress,
    handleDeleteAddressById,
    handleUpdateAddressById, 
    handleGetAddressById , 
    handleGetAllUser, 
    handleCreateNewUser, 
    handleDeleteUserById, 
    handleUpdateUSerById, 
    handleGetUserById} = require('../controllers/User');

const router = express.Router();

router.route("/").get(handleGetAllAddress,handleGetAllUser ).post(handleCreateNewAddress,handleCreateNewUser);

router
.route("/:id")
.get(handleGetAddressById,handleGetUserById)
.patch(handleUpdateAddressById,handleUpdateUSerById)
.delete(handleDeleteAddressById, handleDeleteUserById);
    
module.exports = router;