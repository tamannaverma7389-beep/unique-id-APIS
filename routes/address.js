const express = require('express');
const router = express.Router();
const {createAddress, addressList, addressDetails, deleteAddress, editAddress} = require('../controllers/Address');



router.post("/create", createAddress);
router.get("/list/:userId", addressList);
router.get("/details/:userId/:id", addressDetails);
router.delete("/delete/:userId/:id", deleteAddress);
router.put("/edit/:userId/:id", editAddress);

 module.exports = router;

