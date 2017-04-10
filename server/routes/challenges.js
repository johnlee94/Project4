const
  express = require('express'),
  challengeRouter = express.Router(),
  {createChallenge, deleteChallenge, getChallenges, getChallenge, updateChallenge} = require('../controllers/challenges.js')

module.exports = challengeRouter

challengeRouter.route('/')
  .get(getChallenges)
  .post(createChallenge)

challengeRouter.route('/:id')
  .get(getChallenge)
  .patch(updateChallenge)
  .delete(deleteChallenge)
