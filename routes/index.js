const express = require('express');
const router = express.Router();
const userRouter = require('./user');
const addressRouter = require('./address');


router.use("/users" , userRouter);
router.use("/address" , addressRouter);
module.exports = router;