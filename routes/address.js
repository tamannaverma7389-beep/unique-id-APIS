
const {createAddress, addressList, addressDetails, deleteAddress, editAddress} = require('./controllers/address');



route.post("/address/create", createAddress);
route.get("/address/list/:userId", addressList);
route.get("/address/details/:userId/:id", addressDetails);
route.delete("/address/delete/:userId/:id", deleteAddress);
route.put("/address/edit/:userId/:id", editAddress);

module.exports = router;
