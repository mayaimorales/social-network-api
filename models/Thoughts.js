const { Schema, model } = require('mongoose');
const reactionSchema = require('./Reaction');

const thoughtsSchema = new Schema(
    {
        thoughtText: {
            type: String,
            required: true,
            minlength: 1,
            maxlength: 280,
        },
        createdAt: {
            type: Date,
            default: Date.now(),
        },
        username: {
            type: String,
            required: true,
        },
        reactions: [reactionSchema],

    }
)

const Thoughts = model('thoughts', thoughtsSchema);

module.exports = Thoughts;