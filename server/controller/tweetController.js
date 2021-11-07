module.exports = {
    addTweet: async (req, res) => {
        //connect to database
        const db = req.app.get('db')
        //get the data from the req.body
        const { tweet } = req.body
        //save the data to the database
        const addTweet = await db.add_tweet([tweet])
        //send the data back to the client
        res.status(200).send(addTweet)
    },
    getAllTweets: async (req, res) => {
        const db = req.app.get('db')
        const { tweets } = req.body
        const getAllTweets = await db.get_tweets([tweets])
        res.status(200).send(getAllTweets)
    },
    deleteTweet: async (req, res) => {
        const db = req.app.get('db')
        const { id } = req.params
        await db.delete_tweet([id])
        res.status(200).send('Deleted Succesful')
    },
    editTweet: async (req, res) => {
        const db = req.app.get('db')
        const { id } = req.params
        const { tweet } = req.body
        await db.edit_tweet([tweet, id])
        res.status(200).send('Edited Successfully')
    },
    getSingleTweet: async (req, res) => {
        const db = req.app.get('db')
        const { id } = req.params
        const getSingleTweet = await db.get_single_tweet([id])
        res.status(200).send({
            getSingleTweet
        })
    },
}