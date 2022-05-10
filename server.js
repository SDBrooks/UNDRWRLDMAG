const express = require('express')
const cors = require('cors')
const logger = require('morgan')
const PORT = process.env.PORT || 3001
const db = require('./db')
const { Comment, Picture } = require('./models')
const res = require('express/lib/response')


const app = express()

app.use(cors())
app.use(express.json())
app.use(logger('dev'))

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
        const comment = await Comment.findById(id)
        if (!comment) throw Error('Comment not found')
        res.json(comment)
    } catch (e) {
        console.log(e)
        res.send('Comment not found.')
    }
})

app.get('/', (req, res) => {
  res.send(' UNDRWRLD MAG!')
})

app.listen(PORT, () => {
  console.log(`Express server listening on port ${PORT}`)
})