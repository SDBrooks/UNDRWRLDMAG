const express = require('express')
const cors = require('cors')
const logger = require('morgan')
const PORT = process.env.PORT || 3001
const db = require('./db')
const { Comment, Picture } = require('./models')
const res = require('express/lib/response')
const Routes = require('./routes/commentRouter')


const app = express()

app.use(cors())
app.use(express.json())
app.use(logger('dev'))
app.use('/api', Routes)

app.get('/pictures', async (req, res) => {
    const pictures = await Picture.find()
    res.json(pictures)
})

app.get('/pictures/:id', async (req, res) => {
    try {
        const { id } = req.params
        const picture = await Picture.findById(id)
        if (!picture) throw Error('Comment not found')
        res.json(picture)
    } catch (e) {
        console.log(e)
        res.send('Picture not found.')
    }
})

app.get('/comments', async (req, res) => {
    const comments = await Comment.find()
    res.json(comments)
})

app.get('/comments/:id', async (req, res) => {
    try {
        const { id } = req.params
        const comment = await Comment.find({picture: id})
        if (!comment) throw Error('Comment not found')
        res.json(comment)
    } catch (e) {
        console.log(e)
        res.send('Comment not found.')
    }
})

app.post('/comments/create', async (req, res) => {
    try {
        console.log(req.body)
        const comment = await new Comment(req.body);
        await comment.save();
        return res.status(201).json({comment});
        } catch (e) {
        console.log(e)
        res.send('Comment not found.')
    }
})

app.put('/comments/:id', async (req, res) => {
    try {
        const { id } = req.params;
       const comment = await Comment.findByIdAndUpdate(id, req.body, { new: true }) 
       if (comment) {
        return res.status(200).send('Comment updated')
    }
    throw new Error('Comment not found')
        } catch (err) {return res.status(500).send(err.message)}
});

app.delete('/comments/:id', async (req, res) => {
    try {
        console.log(req.body)
        const { id } = req.params
        const deleted = await Comment.findByIdAndDelete(id);
        if (deleted) {
            return res.status(200).send('Comment Successfully Deleted');
        }
        throw new Error('Comment Not Found');
    } catch (e) {
        return res.status(500).send(e.message);
    }
});

app.get('/', (req, res) => {
  res.send(' UNDRWRLD MAG!')
})

app.listen(PORT, () => {
  console.log(`Express server listening on port ${PORT}`)
})