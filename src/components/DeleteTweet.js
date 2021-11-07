import React, { useState } from 'react'
import axios from 'axios'

const DeleteTweet = () => {
    const [deleteInput, setDeleteInput] = useState('')

    async function submitHandler(e) {
        e.preventDefault()
        console.log(deleteInput)
        const res = await axios.delete(`/api/tweets/${deleteInput}`).catch((error) => console.log(error))
        console.log(res)
    }
    return (
        <div>
            <form onSubmit={submitHandler}>
            <input type="text" value={deleteInput} onChange={(e) => setDeleteInput(e.target.value)}/>
            <button>Delete Tweet</button>
            </form>
        </div>
    )
}

export default DeleteTweet
