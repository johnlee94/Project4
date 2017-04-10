const
  express = require('express'),
  userRouter = express.Router(),
  {signUp, login, logout, status} = require('../controllers/users.js')

module.exports = userRouter

userRouter.route('/signup')
  .post(signUp)

userRouter.route('/login')
  .post(login)

userRouter.route('/logout')
  .get(logout)

userRouter.route('/status')
  .get(status)


// userRouter.post('/signup', (req, res) => {
//   User.register(new User({ username: req.body.username }),
//     req.body.password, (err, account) => {
//     if (err) { return res.status(500).json({err}) }
//     passport.authenticate('local')(req, res, () => {
//       return res.status(200).json({ status: 'Registration successful!' })
//     })
//   })
// })
//
// userRouter.post('/login', (req, res, next) => {
//   passport.authenticate('local', (err, user, info) => {
//     if (err) return next(err)
//     if (!user) return res.status(401).json({ err: info })
//     req.logIn(user, (err) => {
//       if (err) return res.status(500).json({ err: 'Could not log in user' })
//       res.status(200).json({
//         status: 'Login successful!',
//         user: user
//       })
//     })
//   })(req, res, next)
// })
//
// userRouter.get('/logout', (req, res) => {
//   req.logout()
//   res.status(200).json({ status: 'Bye!' })
// })
//
// userRouter.get('/status', (req, res) => {
//   if (!req.isAuthenticated()) return res.status(200).json({ status: false })
//   res.status(200).json({ status: true, user: req.user })
// })
