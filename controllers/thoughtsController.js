const { User, Thoughts } = require('../models');

module.exports = {
    //get all thoughts
    getThoughts(req, res) {
        Thoughts.find()
            .then((users) => res.json(users))
            .catch((err) => res.status(500).json(err))
    },
    //get one thought
    getSingleThought(req, res) {
        Thoughts.findOne({ _id: req.params.username })
            .select('')
            .then((thought) =>
                !thought
                    ? res.status(404).json({ message: 'No thought with this id!' })
                    : res.json(thought)
            )
            .catch((err) => res.status(500).json(err));
    },
    //create a new thought
    createThought(req, res) {
        Thoughts.create(req.body)
            .then((thought) => res.json(thought))
            .catch((err) => res.status(500).json(err));
    },
    //update a thought
    updateThought(req, res) {
        Thoughts.findOneAndUpdate(
            { _id: req.params.username },
            { $set: req.body },
            { runValidators: true, new: true }
        )
            .then((thought) =>
                !thought
                    ? res.status(404).json({ message: 'No thought with this id!' })
                    : res.json(thought)
            )
            .catch((err) => res.status(500).json(err));
    },
    //delete a thought
    deleteThought(req, res) {
        Thoughts.findOneAndDelete({ _id: req.params.username })
            .then((thought) =>
                !thought
                    ? res.status(404).json({ message: 'No thought with this id!' })
                    : res.json(thought)
            )
            .catch((err) => res.status(500).json(err));
    },
}