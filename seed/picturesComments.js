const db = require('../db')
const { Picture, Comment } = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
    const picture1 = await new Picture({
        coverArt: 'https://i.imgur.com/tZnJyUM.jpg',
        description: ' "Lord Forgive Me" Out Now! Stream it on Apple Music. '
    })
    picture1.save()

    const picture2 = await new Picture({
        coverArt: 'https://i.imgur.com/orCjbad.jpg',
        description: ' Newest single, "OMS" streaming on SoundCloud. '
    })
    picture2.save()

    const comments = [{
        name: 'Ric Flair',
        description:  'The Lord might forgive you, but the "Nature Boy" won`t. WOO!',
        picture: picture1._id
    },
    {
        name: 'Maleah Abloh',
        description: "Let's collab. Check DM.",
        picture: picture2._id
    }]
    await Comment.insertMany(comments)
    console.log('Created Comment!')
}
    const run = async () => {
        await main()
        db.close()
    }

    run()