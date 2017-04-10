var User = require('../models/User'),
    passport = require('passport')

module.exports = {
  signUp: signUp,
  login: login,
  logout: logout,
  status: status
}

    function signUp (req, res) {
      User.register(new User({
        username: req.body.username,
        email: req.body.email,
        name: req.body.name,
        experience: req.body.experience,
        level: req.body.level
      }),
        req.body.password, (err, account) => {
        if (err) { return res.status(500).json({err}) }
        passport.authenticate('local')(req, res, () => {
          return res.status(200).json({ status: 'Registration successful!' })
        })
      })
    }

    function login (req, res, next) {
      passport.authenticate('local', (err, user, info) => {
        if (err) return next(err)
        if (!user) return res.status(401).json({ err: info })
        req.logIn(user, (err) => {
          if (err) return res.status(500).json({ err: 'Could not log in user' })
          res.status(200).json({
            status: 'Login successful!',
            user: user
          })
        })
      })(req, res, next)
    }

    function logout (req, res) {
      req.logout()
      res.status(200).json({ status: 'Bye!' })
    }

    function status (req, res) {
      if (!req.isAuthenticated()) return res.status(200).json({ status: false })
      res.status(200).json({ status: true, user: req.user })
    }
