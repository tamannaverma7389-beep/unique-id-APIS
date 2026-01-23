const User = require('../models/user');

async function createNewUser(req, res) {
    const body = req.body;
    if (
        !body ||
        !body.name ||
        !body.email
        )  {
        return res.status(400).json({msg : "All fields are req..."});
    };
    const result = await User.create({
      name : body.name,
      email: body.email,
    });
    // console.log("result" , result);
    return res.status(201).json({ msg : "success", id:result._id});
};
async function userDetails(req ,res) {
    const allDbUser =  await User.findById(req.params.id);
      return res.json(allDbUser);
};
async function userList(req,res) {
    const Users = await User.find();
    if(!User) return res.status(404).json({error: "user not found"});
     return res.json(Users);
};

async function editUser(req, res) {
    const Users = await User.findByIdAndUpdate(req.params.id , req.body, { new: true });
    return res.json({status: 'success'});
};
async function deleteUser(req, res) {
    const Users = await User.findByIdAndDelete(req.params.id);
    return res.json({status: 'success'});
};

module.exports = {
    userList,
    userDetails,
    deleteUser,
    editUser,
    createNewUser,
};