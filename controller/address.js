const Address = require('../models/Address');

async function handleGetAllAddress(req ,res) {
    const allDbAddress =  await Address.find({});
      return res.json(allDbAddress);

}
async function handleGetAddressById(req,res) {
    const Address = await Address.findById(req.params.id);
    if(!Addressr) return res.status(404).json({error: "address not found"});
     return res.json(Address);
 }

async function handleUpdateAddressById(req, res) {
    await Address.findByIdAndUpdate(req.params.id , req.body, { new: true });
    return res.json({status: 'success'})
}
async function handleDeleteAddressById(req, res) {
    await Address.findByIdAndDelete(req.params.id);
    return res.json({status: 'success'})
}

async function handleCreateNewAddress(req, res) {
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
    handleGetAllAddress,
    handleGetAddressById,
    handleUpdateAddressById,
    handleDeleteAddressById,
    handleCreateNewAddress,
}