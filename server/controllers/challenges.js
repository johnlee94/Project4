var Challenge = require('../models/Challenge'),
    passport = require('passport')

module.exports = {
  newChallenge: newChallenge,
  deleteChallenge: deleteChallenge,
  getChallenges: getChallenges,
  getChallenge: getChallenge,
  updateChallenge: updateChallenge
}

// GET all players (json)
function getPlayers(req, res) {
  Player.find(function(err, players) {
    if (err) res.json({message: 'No players found currently'})

    res.json({players: players})
  })
}

function createPlayer(req, res) {
  var player = new Player(req.body)

  player.save(function(err) {
    if (err) throw err

    res.json({player: player})
  })
}

function getPlayer(req, res) {
  var id = req.params.id

  Player.find({_id: id}, function(err, player) {
    if(err) throw err

    res.json({player: player})
  })
}

function updatePlayer(req, res) {
  var id = req.params.id

  Player.find({_id: id}, function(err, player) {
    if (err) throw error

    player.name = req.body.name
    player.age = req.body.age
    player.team = req.body.team
    player.role = req.body.role
    player.hero = req.body.hero

    player.save(function(err) {
      if (err) throw err

      res.json({president: president})
    })
  })
}

function removePlayer(req, res) {
  var id = req.params.id

  Player.remove({_id: id}, function(err) {
    if (err) throw err

    res.json({message: 'succesfully deleted'})
  })
}
