const
  mongoose = require('mongoose'),
  Schema = mongoose.Schema,
  passportLocalMongoose = require('passport-local-mongoose'),
  userSchema = new Schema({
    username: String,
    email: {type: String},
      // required: true, unique: true},
    password: String,
    name: String,
    experience: {type: Number, default: 0},
    level: {type: Number, default: 0}
  })

userSchema.plugin(passportLocalMongoose)
var User = mongoose.model('users', userSchema)

module.exports = User
