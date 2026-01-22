const Address = require('../models/Address');

async function addressDetails(req ,res) {
    const allDbAddress =  await Address.findById({});
      return res.json(allDbAddress);

}
async function addressList(req,res) {
    const address = await Address.findById(req.params.id);
    if(!Addressr) return res.status(404).json({error: "address not found"});
     return res.json(Address);
 }

async function  editAddress(req, res) {
    await Address.findByIdAndUpdate(req.params.id , req.body, { new: true });
    return res.json({status: 'success'})
}
async function deleteAddress(req, res) {
    await Address.findByIdAndDelete(req.params.id);
    return res.json({status: 'success'})
}

async function createAddress(req, res) {
    const body = req.body;
    if (
        !body.user ||
        !body.street ||
        !body.state ||
        !body.postalcode ||
        !body.country ||
        !body.city
    )  {
        return res.status(400).json({msg : "All fields are req..."});
    };
    const result = await Address.create({
      user : req.user,
      cityName : body.city_name,
      stateName : body.state_name,
      postalCode : body.postal_code,
      country: body.country ,
      street : body.street,
    });
    // console.log("result" , result);
    return res.status(201).json({ msg : "success", id:result._id});
};
module.exports = {
    createAddress,
    addressList,
    addressDetails,
    deleteAddress,
    editAddress,
}