
const User = require('../models/user');

async function handleGetAllUser(req ,res) {
    const allDbUsers =  await User.find({});
      return res.json(allDbUsers);

}
async function handleGetUserById(req,res) {
    const user = await User.findById(req.params.id);
    if(!user) return res.status(404).json({error: "user not found"});
     return res.json(user);
 }

async function handleUpdateUSerById(req, res) {
    await User.findByIdAndUpdate(req.params.id , req.body, { new: true } );
    return res.json({status: 'success'})
}
async function handleDeleteUserById(req, res) {
    await User.findByIdAndDelete(req.params.id);
    return res.json({status: 'success'})
}



async function handleCreateNewUser(req, res) {
    const body = req.body;
    if (
        !body ||
        !body.user_name ||
        !body.user_email 
            )  {
        return res.status(400).json({msg : "All fields are req..."});
    };
    const result = await User.create({
      userName : body.user_name,
      email: body.email,
    });
    // console.log("result" , result);
    return res.status(201).json({ msg : "success", id:result._id});
}

module.exports = {
    handleGetAllUser,
    handleGetUserById,
    handleUpdateUSerById,
    handleDeleteUserById,
    handleCreateNewUser,
};