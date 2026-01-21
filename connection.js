const mongoose = require("mongoose");
mongoose.set("strictQuery" , true);
async function connectMongoDb() {
return mongoose.connect(process.env.MONGO_URL);
}

module.exports = {
    connectMongoDb,
};