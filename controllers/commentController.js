// import { useParams } from 'react-router-dom'
const res = require('express/lib/response');
const { Comment } = require('../models/index')


// const createComment = async (req, res) => {
//     try {
//         console.log(req.body)
//         const comment = await new Comment(req.body);
//         await comment.save();
//         return res.status(201).json({
//             comment

//         });
        
//     } catch (e) {
//         // console.error(e)
//         // throw error
//         throw res.send(req.body);
//     }
// }

const getCommentById = async (req, res) => {
    try { 
        const { id } = req.params;
        const comment = await Comment.findById(id);
        if (comment) {
            return res.status(200).json({comment})
        }
        return res.status(404).send('Comment with the specified ID does not exist')
    } catch (error) {
        return res.status(500).send(error.message)
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
        const commentId = parseInt(req.params.comment_id);
        const deleted = await Comment.findByIdAndDelete(id);
        if (deleted) {
            return res.status(200).send('Comment Successfully Deleted');
        }
        throw new Error('Comment Not Found');
    } catch (e) {
        return res.status(500).send(error.message);
    }
};

module.exports = {
    // createComment,
    getAllComments,
    updateComment,
    deleteComment,
    getCommentById
}