import { useState, useEffect } from 'react'
import axios from 'axios'

const Delete = (id) => {
    useEffect(() => {
        axios( { method: 'delete', url:`/api/employe/${'6169fd3726c941710564516e'}` })
            .then(() => console.log({ status: 'Delete successful' }))
            .catch((error) => console.error(error))
    },[])

    return(
        <div>

        </div>
    )
}

export default Delete