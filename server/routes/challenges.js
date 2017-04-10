const
  express = require('express'),
  challengeRouter = express.Router(),
  {signUp, login, logout, status} = require('../controllers/challenges.js')

module.exports = userRouter

userRouter.route('/signup')
  .post(signUp)

userRouter.route('/login')
  .post(login)

userRouter.route('/logout')
  .get(logout)

userRouter.route('/status')
  .get(status)
