const
  mongoose = require('mongoose'),
  Schema = mongoose.Schema,
  passportLocalMongoose = require('passport-local-mongoose'),
  requestSchema = new Schema({
    picture: String,
    caption: String,
    rating: Number,
    challenge: {type: mongoose.Schema.Types.ObjectId, ref: "Challenge"},
    user: {type: mongoose.Schema.Types.ObjectId, ref: "users"},
    // status should be from: pending, approved, rejected, send
    status: String,
    created_at: {type: Date, default: Date.now},
    expiration: Number
  })

var Request = mongoose.model('Request', requestSchema)
module.exports = Request
