const mongoose = require("mongoose");
const { UserSchema } = require("../schemas/userSchema");

const UserModel = new mongoose.model("user", UserSchema);

module.exports = { UserModel };
