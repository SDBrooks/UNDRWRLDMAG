const { Router } = require('express');
const router = Router();
const controllers = require('../controllers/commentController');


router.get('/comments', controllers.getAllComments);

router.post('/addComments', controllers.createComment);

router.put('/updateComment/:id', controllers.updateComment);

router.delete('/comment/:id', controllers.deleteComment);

module.exports = router