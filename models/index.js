const mongoose = require('mongoose')
const PictureSchema = require('./pictures')
const CommentSchema = require('./comments')

const Picture = mongoose.model('pictures', PictureSchema)
const Comment = mongoose.model('comments', CommentSchema)

module.exports = {
    Picture,
    Comment
}