var Challenge = require('../models/Challenge')

module.exports = {
  createChallenge: createChallenge,
  deleteChallenge: deleteChallenge,
  getChallenges: getChallenges,
  getChallenge: getChallenge,
  updateChallenge: updateChallenge
}

// GET all players (json)
function getChallenges(req, res) {
  Challenge.find(function(err, challenges) {
    if (err) res.json({message: 'No players found currently'})

    res.json({challenges: challenges})
  })
}

function createChallenge(req, res) {
  console.log(req.body)
  var challenge = new Challenge(req.body)

  challenge.save(function(err) {
    if (err) throw err

    res.json({challenge: challenge})
  })
}

function getChallenge(req, res) {
  var id = req.params.id

  Challenge.find({_id: id}, function(err, challenge) {
    if(err) throw err

    res.json({challenge: challenge})
  })
}

function updateChallenge(req, res) {
  var id = req.params.id

  Player.find({_id: id}, function(err, challenge) {
    if (err) throw error

    challenge.title = req.body.title
    challenge.menu = req.body.menu
    challenge.featured_items = req.body.featured_items
    challenge.additional_comments = req.body.additional_comments
    challenge.public = req.body.public
    challenge.zip = req.body.zip
    challenge.location = req.body.location
    challenge.price_level = req.body.price_level
    challenge.hours = req.body.hours

    challenge.save(function(err) {
      if (err) throw err

      res.json({challenge: challenge})
    })
  })
}

function deleteChallenge(req, res) {
  var id = req.params.id

  Challenge.remove({_id: id}, function(err) {
    if (err) throw err

    res.json({message: 'succesfully deleted'})
  })
}
