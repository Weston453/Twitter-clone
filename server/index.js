//import what we need
require('dotenv').config()
const express = require('express');
const massive = require('massive');
const tweetCtrl = require('./controller/tweetController')
const { CONNECTION_STRING, PORT } = process.env

const app = express();

//Middleware
app.use(express.json())

// create routes (endpoints) GET, POST, PUT, DELETE

//get all tweets
app.get('/api/tweets', tweetCtrl.getAllTweets)

//Add a tweet
app.post('/api/tweets', tweetCtrl.addTweet)
//find a tweet
app.get('/api/tweets/:id', tweetCtrl.getSingleTweet)
//update a tweet
app.put('/api/tweets/:id', tweetCtrl.editTweet)
//delete a tweet
app.delete('/api/tweets/:id', tweetCtrl.deleteTweet)


massive({
    connectionString: CONNECTION_STRING,
    ssl: {
     rejectUnauthorized: false,
    },
}).then((dbInstance) => {
    app.set('db', dbInstance)
    console.log('db connected')
})
   
// create listener
app.listen(PORT, () => {
    console.log(`Server is lit on post: ${PORT}`)
})