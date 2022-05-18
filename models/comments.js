const { Schema } = require('mongoose')

const Comment = new Schema(
    {
    name: { type: String, required: true },
    description: { type: String, required: true },
    picture: { type: Schema.Types.ObjectId, ref: 'pictures' }
}, 
    { timestamps: true }
    )

    module.exports = Comment;