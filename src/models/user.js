const mongoose = require("mongoose");
const { Schema } = mongoose;

const UserSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  address: { type: String, required: true },
  phone: { type: String, required: true },
  role: {
    type: String,
    required: true,
    enum: { values: ["admin", "client"], message: "El role no es válido" },
    default: "client",
  },
});

module.exports = mongoose.model("user", UserSchema);
