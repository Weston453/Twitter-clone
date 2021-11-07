import React, { useState } from 'react'
import axios from 'axios'

const GetSingleTweet = () => {
    const [id, setId] = useState('')
    const [data, setData] = useState('')
    const [displayData, setDisplayData] = useState('')
    


    async function clickHandler(e) {
        e.preventDefault()
        console.log("anything else")
        const res = await axios
        .get(`/api/tweet/${id}`)
        .catch((error) => console.log(error))
        console.log(res.data.tweet)
        setData(res.data.tweet)
        setDisplayData(true)
    }

    return (
        <div>
            <form>
                <input type="text" placeholder="id" value={id} onChange={(e) => setId(e.target.value)}></input>
                <button type="submit" onClick={clickHandler}>Find Tweet</button>
                {displayData && <div>{JSON.stringify(data)}</div>}
            </form>
        </div>
    )
}

export default GetSingleTweet
