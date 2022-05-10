const res = require('express/lib/response')
const { Picture } = require('../models/pictures')

const createPicture = async (req, res) => {
    try {
        const picture = await new Picture(rew.body)
        await picture.save()
        return res.status(201).json({
            picture
        });
    } catch (e) {
        throw error;
    }
}





const getAllPictures = async (req, res) => {
    try {
        const pictures = await Picture.findAll()
        res.json(pictures)
    } catch (e) {
        throw error;
    }
}