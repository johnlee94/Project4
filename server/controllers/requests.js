var Request = require('../models/Request')

module.exports = {
  createRequest: createRequest,
  deleteRequest: deleteRequest,
  getRequests: getRequests,
  getRequest: getRequest,
  updateRequest: updateRequest
}

// GET all players (json)
function getRequests(req, res) {
  Request.find(function(err, requests) {
    if (err) res.json({message: 'No players found currently'})

    res.json({requests: requests})
  })
}

function createRequest(req, res) {
  var request = new Request(req.body)

  request.save(function(err) {
    if (err) throw err

    res.json({request: request})
  })
}

function getRequest(req, res) {
  var id = req.params.id

  Request.find({_id: id}, function(err, request) {
    if(err) throw err

    res.json({request: request})
  })
}

function updateRequest(req, res) {
  var id = req.params.id

  Player.find({_id: id}, function(err, request) {
    if (err) throw error

    request.picture = req.body.picture
    request.caption = req.body.caption
    request.rating = req.body.rating
    request.status = req.body.status
    // request.expiration = req.body.expiration

    request.save(function(err) {
      if (err) throw err

      res.json({request: request})
    })
  })
}

function deleteRequest(req, res) {
  var id = req.params.id

  Request.remove({_id: id}, function(err) {
    if (err) throw err

    res.json({message: 'succesfully deleted'})
  })
}
