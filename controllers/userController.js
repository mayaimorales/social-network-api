const { User, Thoughts } = require('../models');

module.exports = {
    //get all users
    getAllUsers(req, res) {
        User.find()
            .then((users) => res.json(users))
            .catch((err) => res.status(500).json(err))
    },
    //get one user
    getSingleUser(req, res) {
        User.findOne({ _id: req.params.username })
            .select('')
            .then((user) =>
                !user
                    ? res.status(404).json({ message: 'No user with this username!' })
                    : res.json(user)
            )
            .catch((err) => res.status(500).json(err));
    },
    //create a new user
    createUser(req, res) {
        User.create(req.body)
            .then((user) => res.json(user))
            .catch((err) => res.status(500).json(err));
    },
    //update a user
    updateUser(req, res) {
        Course.findOneAndUpdate(
            { _id: req.params.username },
            { $set: req.body },
            { runValidators: true, new: true }
        )
            .then((user) =>
                !user
                    ? res.status(404).json({ message: 'No user with this username' })
                    : res.json(user)
            )
            .catch((err) => res.status(500).json(err));
    },
    //delete a user
    deleteUser(req, res) {
        User.findOneAndDelete({ _id: req.params.username })
            .then((user) =>
                !user
                    ? res.status(404).json({ message: 'No user with this username' })
                    : Thoughts.deleteMany({ _id: { $in: user.thoughts } })
            )
            .then(() => res.json({ message: 'User and Thoughts deleted!' }))
            .catch((err) => res.status(500).json(err));
    },


}