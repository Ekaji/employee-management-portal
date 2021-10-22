import { useState, useEffect } from 'react'
import axios from 'axios'

const Delete = (id) => {
    useEffect(() => {
        axios( { method: 'delete', url:`/api/employe/${'616b39c0e29baf3a66461bb7'}` })
            .then(() => console.log({ status: 'Delete successful' }))
            .catch((error) => console.error(error))
    },[])

    return(
        <div>

        </div>
    )
}

export default Delete