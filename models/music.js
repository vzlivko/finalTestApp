"use strict";
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let track = new Schema({
  name: { type: String, required: true },
  author: { type: String, required: true },
  likes: Number
});

module.exports = mongoose.model("Track", track);
