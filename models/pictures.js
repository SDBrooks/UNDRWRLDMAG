const { Schema } = require('mongoose')

const Picture = new Schema(
    {
    coverArt: { type: String, required: true},
    description: { type: String}
},
    { timestamps: true }
    )

    module.exports = Picture