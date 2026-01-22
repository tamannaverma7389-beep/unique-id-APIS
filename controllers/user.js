const User = require('../models/User.js');

async function userList(req ,res) {
    const user =  await User.find({user});
      return res.json(user);
}
async function userDetails(req,res) {
    const user = await user.findById(req.params.id);
    if(!user) return res.status(404).json({error: "user not found"});
     return res.json(user);
 }

async function editUser(req, res) {
    const user = await user.findByIdAndUpdate(req.params.id , req.body, { new: true } );
    return res.json({status: 'success'});
}
async function deleteUser(req, res) {
    const user = await user.findByIdAndDelete(req.params.id);
    return res.json({status: 'success'});
}



async function createNewUser(req, res) {
    const body = req.body;
    if (
        !body ||
        !body.user_name ||
        !body.user_email 
            )  {
        return res.status(400).json({msg : "All fields are req..."});
    };
    const result = await User.create({
      name : body.user_name,
      email: body.user_email,
    });
    // console.log("result" , result);
    return res.status(201).json({ msg : "success", id:result._id});
};

module.exports = {
    userList,
    userDetails,
    deleteUser,
    editUser,
    createNewUser,
};