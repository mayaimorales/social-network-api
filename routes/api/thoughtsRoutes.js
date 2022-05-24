const router = require('express').Router();

const {
    getThoughts,
    getSingleThought,
    createThought,
    updateThought,
    deleteThought,
  } = require('../../controllers/thoughtsController');
  
  // /api/thoughts
  router.route('/').get(getThoughts).post(createThought);
  
  // /api/users/:username/thoughts/:thoughtId
  router
    .route('users/:username/thoughts/:thoughtId')
    .get(getSingleThought)
    .put(updateThought)
    .delete(deleteThought);
  
  module.exports = router;