const
  express = require('express'),
  challengeRouter = express.Router(),
  {createChallenge, deleteChallenge, getChallenges, getChallenge, updateChallenge} = require('../controllers/challenges.js'),
  {search} = require('../controllers/yelpApi.js')

module.exports = challengeRouter

challengeRouter.route('/api')
  .get(search)

challengeRouter.route('/')
  .get(getChallenges)
  .post(createChallenge)

challengeRouter.route('/:id')
  .get(getChallenge)
  .patch(updateChallenge)
  .delete(deleteChallenge)
