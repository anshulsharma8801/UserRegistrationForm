const mongoose = require('mongoose');

const RegisterUserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, "Please provide a username"],
  },
  email: {
    type: String,
    required: [true, "Please provide an email"],
    unique: [true, "That email id already exists"],
    match: [/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/, 
  "Please provide an email"]
  },
  phone: {
    type: Number,
    required: [true, "Please provide a contact no."]
  },
  dob: {
      type: Date,
      default: Date.now
  }
});


module.exports = mongoose.model('RegisteredUser', RegisterUserSchema);
