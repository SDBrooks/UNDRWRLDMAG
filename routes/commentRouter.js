const { Router } = require('express');
const router = Router();
const controllers = require('../controllers/commentController');

router.get('/comments', controllers.getAllComments);

router.get('/comments/:id', controllers.getCommentById);

// router.post('/comments/create', controllers.createComment);

router.put('/comments/:id', controllers.updateComment);

router.delete('/comments/:id', controllers.deleteComment);

module.exports = router