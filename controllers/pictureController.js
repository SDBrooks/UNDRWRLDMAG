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

const updatePicture = async (req, res) => {
    try {
        const { id } = req.params;
        await Picture.findByIdAndUpdate(id, req.body, { new: true}, (err, comment) => {
            return res.status(200).json(data);
        });
    } catch (error) {}
}

const deletePicture = async (req, res) => {
    try {
        const { id } = req.params;
        const deleted = await Picture.findByIdAndDelete(id);
        if (deleted) {
            return res.status(200).send('Image Deleted');
        }
        throw new Error('Image Not Found');
    } catch (e) {
        return res.status(500).send(error.message)
    }
};

module.exports = {
    createPicture,
    getAllPictures,
    updatePicture,
    deletePicture
}