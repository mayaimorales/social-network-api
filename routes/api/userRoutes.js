const router = require('express').Router();

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
router
  .route('/:username')
  .get(getSingleUser)
  .put(updateUser)
  .delete(deleteUser);

module.exports = router;