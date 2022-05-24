const { Schema, model } = require('mongoose');

const thoughtsSchema = new Schema({
    username: {
        type: String,
        unique: true,
        required: true,
        trimmed: true
    },
    email: {
        type: String,
        unique: true,
        required: true,
        trimmed: true

    },
    thoughts: {

    },
    friends: {

    }
})

const Thoughts = model('thoughts', thoughtsSchema);

module.exports = Thoughts;