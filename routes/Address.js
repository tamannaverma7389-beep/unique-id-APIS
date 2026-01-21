const express = require("express");
const {handleGetAllAddress, handleCreateNewAddress, handleDeleteAddressById, handleUpdateAddressById, handleGetAddressById} = require('../controllers/Address');

const router = express.Router();

router.route("/").get(handleGetAllAddress).post(handleCreateNewAddress);

router
.route("/:id")
.get(handleGetAddressById)
.patch(handleUpdateAddressById)
.delete(handleDeleteAddressById);
    
module.exports = router;