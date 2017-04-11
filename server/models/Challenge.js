  const
  mongoose = require('mongoose'),
  Schema = mongoose.Schema,
  passportLocalMongoose = require('passport-local-mongoose'),
  challengeSchema = new Schema({
    title: String,
    body: String,
    created_at: {type: Date, default: Date.now},
    expiration: Number,
    user: {type: mongoose.Schema.Types.ObjectId, ref: "users"},
    menu: String,
    featured_item: {picture: String, price: String, caption: String},
    additional_comments: String,
    public: {type: Boolean, default: false},
    zip: Number,
    location: String,
    category: String,
    price_level: String,
    hours: String
  })

var Challenge = mongoose.model('Challenge', challengeSchema)
module.exports = Challenge
