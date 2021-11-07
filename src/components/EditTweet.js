import React, { useState } from 'react'
import axios from 'axios'

const EditTweet = () => {
    const [newTweet, setNewTweet] = useState('')
    const [id, setId] = useState('')


    async function clickHandler(e) {
        e.preventDefault()
        console.log("anything else")
        const res = await axios
        .put(`/api/tweets/${id}`, { tweet: newTweet })
        .catch((error) => console.log(error))
        console.log(res.data)
    }

    return (
        <div>
            <form>
                <input type="text" placeholder="id" value={id} onChange={(e) => setId(e.target.value)}></input>
                <input type="text" placeholder="New Tweet" value={newTweet} onChange={(e) => setNewTweet(e.target.value)}></input>
                <button type="submit" onClick={clickHandler}>Edit</button>
            </form>
        </div>
    )
}

export default EditTweet
