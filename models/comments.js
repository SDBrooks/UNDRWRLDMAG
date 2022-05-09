const { Schema } = require('mongoose')

const Comment = new Schema(
    {
        name: { type: String, required: true },
        description: { type: String, required: true },
}, 
    { timestamps: true }
    )

    module.exports = Comment