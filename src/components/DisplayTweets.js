import React from 'react'
import { useState } from 'react'
import axios from 'axios'

const DisplayTweets = () => {

    const [displayTweets, setDisplay] = useState(false)
    const [data, setData] = useState([])

    const handleClick = async () => {
        setDisplay(true)
        const res = await axios.get("/api/tweets")
        console.log(res.data)
        setData(res.data)
    }

    return (
        <div>
            <button onClick={handleClick}>Fetch Tweets</button>
            {displayTweets && <div>{JSON.stringify(data)}</div>}
        </div>
    )
}

// { data && data.map((tweetObj, i) => {
//     return (
//         <div key={i} style={{border: '1px solid black', margin: '2px'}}>
//             <p>id: {tweetObj.id}</p>
//             <p>tweet: {tweetObj.tweet}</p>
//             <button onClick={() => console.log(tweetObj.id)}>Delete</button>
//         </div>
//     )
// })}

export default DisplayTweets
