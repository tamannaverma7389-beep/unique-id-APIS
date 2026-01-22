
const User = require('../models/user');

async function userList(req ,res) {
    const allDbUsers =  await User.find({});
      return res.json(allDbUsers);

}
async function userDetails(req,res) {
    const user = await User.findById(req.params.id);
    if(!user) return res.status(404).json({error: "user not found"});
     return res.json(user);
 }

async function editUser(req, res) {
    await User.findByIdAndUpdate(req.params.id , req.body, { new: true } );
    return res.json({status: 'success'})
}
async function deleteUser(req, res) {
    await User.findByIdAndDelete(req.params.id);
    return res.json({status: 'success'})
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
      userName : body.user_name,
      email: body.email,
    });
    // console.log("result" , result);
    return res.status(201).json({ msg : "success", id:result._id});
}

module.exports = {
    userList,
    userDetails,
    deleteUser,
    editUser,
    createNewUser,
};