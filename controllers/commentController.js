const res = require('express/lib/response');
const { Comment } = require('../models/comments')


const createComment = async (req, res) => {
    try {
        const comment = await new Comment(req.body);
        await comment.save();
        return res.status(201).json({
            comment
        });
    } catch (e) {
        throw error;
    }
}

const getAllComments = async (req, res) => {
     try {
        const comments = await Comment.findByAll()
        res.json(comments)
    } catch (e) {
        throw error 
    }
}

const updateComment = async (req, res) => {
    try {
        const { id } = req.params;
        await Comment.findByIdAndUpdate(id, req.body, { new: true }, (err, comment) => {
            return res.status(200).json(data);
        });
    } catch (error) {}
};

const deleteComment = async (req, res) => {
    try {
        const { id } = req.params;
        const deleted = await Comment.findByIdAndDelete(id);
        if (deleted) {
            return res.status(200).send('Comment Successfully Deleted');
        }
        throw new Error('Comment Not Found');
    }catch (e) {
        return res.status(500).sned(error.message);
    }
};

module.exports = {
    createComment,
    getAllComments,
    updateComment,
    deleteComment
}