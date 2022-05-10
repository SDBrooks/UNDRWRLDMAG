const express = require('express')
const cors = require('cors')
const logger = require('morgan')
const PORT = process.env.PORT || 3001
const db = require('./db')
const { Comment } = require('./models')


const app = express()

app.use(cors())
app.use(express.json())
app.use(logger('dev'))

app.get('/comments', async (req, res) => {
    const comments = await Comment.find()
    res.json(comments)
})

app.get('/', (req, res) => {
  res.send(' UNDRWRLD MAG!')
})

app.listen(PORT, () => {
  console.log(`Express server listening on port ${PORT}`)
})