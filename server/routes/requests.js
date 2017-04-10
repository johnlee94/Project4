const
  express = require('express'),
  requestRouter = express.Router(),
  {createRequest, deleteRequest, getRequests, getRequest, updateRequest} = require('../controllers/requests.js')

module.exports = requestRouter

requestRouter.route('/')
  .get(getRequests)
  .post(createRequest)

requestRouter.route('/:id')
  .get(getRequest)
  .patch(updateRequest)
  .delete(deleteRequest)
