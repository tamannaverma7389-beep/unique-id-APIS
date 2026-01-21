const mongoose = require("mongoose");

const addressSchema = new mongoose.Schema({
    userId:{
        type: String,
        required:true,
        unique: true,
    },
    cityName: {
        type:String,
        required:true,
    },
    stateName:{
        type: String,
        required: true,
    },
    zipCode: {
        type: String,
        required:true,
    },
    countryName: {
        type: String,
        required:true,
    },
    addressLine1: {
        type: String,
        required:true,
    },
},
{ timestamps: true}
);

const Address = mongoose.model('Address' , addressSchema);

module.exports = Address;