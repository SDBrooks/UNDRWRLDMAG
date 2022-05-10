const { Router } = require('express');
const router = Router();
const controllers = require('../controllers/pictureController');

router.get('/pictures', controllers.getAllPictures)

router.get('/pictures/:id', controllers.getPictureById)

router.post('/pictures', controllers.createPicture)

router.put('/pictures/:id', controllers.updatePicture)

router.delete('/pictures/:id', controllers.deletePicture)