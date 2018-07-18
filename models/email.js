const nodemailer = require('nodemailer')
var mongoose = require('mongoose')

// User Schema
var EmailSchema = mongoose.Schema({
  from: {
    type: String,
  },
  to: {
    type: String
  },
  subject: {
    type: String
  },
  text: {
    type: String
  }
})
