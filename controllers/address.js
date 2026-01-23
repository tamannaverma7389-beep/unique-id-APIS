const Address = require('../models/address.js');


async function createAddress(req, res) {
    const body = req.body;
    if (
        !body.userId ||
        !body.street ||
        !body.stateName ||
        !body.postalCode ||
        !body.country ||
        !body.cityName
    )  {
        return res.status(400).json({msg : "All fields are req..."});
    };
    const result = await Address.create({
      userId : body.userId,
      cityName : body.city_name,
      stateName : body.state_name,
      postalCode : body.postal_code,
      country: body.country ,
      street : body.street,
    });
    console.log("result" , result);
    return res.status(201).json({ msg : "success", id:result._id});
};
async function addressDetails(req, res) {
    const address =  await Address.findById(req.params.id);
      return res.json(address);

};
async function addressList(req,res) {
    const address = await Address.find({userId: req.params.userId});
    if(!address) return res.status(404).json({error: "address not found"});
     return res.json(address);
 };

async function  editAddress(req, res) {
    const updateAddress = await Address.findByIdAndUpdate(req.params.id , req.body, { new: true });
    return res.json({status: 'success'});
};

async function deleteAddress(req, res) {
    const deleteAddress = await Address.findByIdAndDelete(req.params.id);
    return res.json({status: 'success'});
};

module.exports = {
    createAddress,
    addressList,
    addressDetails,
    deleteAddress,
    editAddress,
};