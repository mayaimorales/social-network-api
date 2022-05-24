const router = require('express').Router();

const { createThought, deleteThought } = require('../../controllers/thoughtsController');
const {
  getAllUsers,
  getSingleUser,
  createUser,
  updateUser,
  deleteUser,
} = require('../../controllers/userController');

// /api/users
router.route('/').get(getAllUsers).post(createUser);

// /api/users/:username
router.route('/:username').get(getSingleUser).delete(deleteUser);

// /api/users/:username/thoughts
router.route('/:username/thoughts').post(createThought);

// /api/users/:username/thoughts/:thoughtId
router.route('/:username/thoughts/:thoughtId').delete(deleteThought);

// /api/users/:username
router
  .route('/:username')
  .get(getSingleUser)
  .put(updateUser)
  .delete(deleteUser);

module.exports = router;