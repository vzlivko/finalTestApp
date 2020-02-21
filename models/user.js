"use strict";
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let user = new Schema({
  username: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true, min: 8 },
  confirmPassword: { type: String, required: true, min: 8 },
  name: String,
  familyName: String,
  birthday: Date,
  myMusic: [String]
});

module.exports = mongoose.model("User", user);
