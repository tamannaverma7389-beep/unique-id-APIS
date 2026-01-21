const Address = require('../models/Address');

async function handleGetAllAddress(req ,res) {
    const allDbUsers =  await Address.find({});
      return res.json(allDbUsers);

}
async function handleGetAddressById(req,res) {
    const user = await Address.findById(req.params.id);
    if(!user) return res.status(404).json({error: "user not found"});
     return res.json(user);
 }

async function handleUpdateAddressById(req, res) {
    await Address.findByIdAndUpdate(req.params.id );
    return res.json({status: 'success'})
}
async function handleDeleteAddressById(req, res) {
    await Address.findByIdAndDelete(req.params.id);
    return res.json({status: 'success'})
}

async function handleCreateNewAddress(req, res) {
    const body = req.body;
    if (
        !body ||
        !body.user_id ||
        !body.city_name ||
        !body.state_name ||
        !body.zip_code ||
        !body.country_name ||
        !body.address_line1 
    )  {
        return res.status(400).json({msg : "All fields are req..."});
    };
    const result = await Address.create({
      userId : body.user_id,
      cityName : body.city_name,
      stateName : body.state_name,
      zipCode : body.zip_code,
      countryName: body.country_name ,
      addressLine1 : body.address_line1,
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
};