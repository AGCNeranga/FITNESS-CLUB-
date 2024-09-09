const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  //@author senura

  role: {
    type: String,
  },
  firstName: {
    type: String,
  },
  lastName: {
    type: String,
  },
  email: {
    type: String,
    unique: true,
  },
  password: {
    type: String,
  },
  password2: {
    type: String,
  },
  mobileNo: {
    type: String,
  },
});
module.exports = User = mongoose.model("Admin", UserSchema);
