const
  port = process.env.PORT || 3000,
  mongoUrl = process.env.MONGODB_URL || 'mongodb://localhost/grubking',
  clientDir = process.env.PWD + '/client/'
  express = require('express'),
  app = express(),
  logger = require('morgan'),
  cookieParser = require('cookie-parser'),
  bodyParser = require('body-parser'),
  expressSession = require('express-session'),
  mongoose = require('mongoose'),
  hash = require('bcrypt-nodejs'),
  path = require('path'),
  passport = require('passport'),
  passportConfig = require('./config/passport.js'),
  User = require('./models/User.js'),
  usersRoutes = require('./routes/users.js'),
  challengeRoutes = require('./routes/challenges.js'),
  requestRoutes = require('./routes/requests.js'),
  session = require('express-session'),
  MongoDBStore = require('connect-mongodb-session')(session),

mongoose.connect(mongoUrl, (err) => {
  console.log(err || `Connected to MongoDB.`)
})

require('dotenv').config();

// will store session information as a 'sessions' collection in Mongo
const store = new MongoDBStore({
  uri: mongoUrl,
  collection: 'sessions'
});

// define middleware
app.use(express.static(clientDir))
app.use(logger('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(session({
  secret: 'boooooooooom',
  cookie: {maxAge: 60000000},
  resave: true,
  saveUninitialized: false,
  store: store
}))
app.use(passport.initialize())
app.use(passport.session())

// routes
app.use('/users', usersRoutes)
app.use('/challenges', challengeRoutes)
app.use('/requests', requestRoutes)

app.get('/', (req, res) => {
  res.sendFile(clientDir + 'index.html')
})

app.listen(port, (err) => {
  console.log("Listening for requests on port:", port)
})
