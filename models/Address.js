const mongoose = require("mongoose");

const addressSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    street: String,
    city: String,
    state: String,
    postalCode: String,
    country: String,
  },
  { timestamps: true }
);

module.exports = mongoose.model("address", addressSchema);