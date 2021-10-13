import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import axios from 'axios'

const Details = () => {
    const { id } = useParams()
    const [data, setData] = useState(null)
    
    const getItem = async () => {
       await axios.get(`/api/employe/${id}`)
            .then(response => setData(response.data))
            .catch((error) => {
                console.log(error)
            })
    }

    useEffect(() => {
        getItem()
    },[ ])

    console.log(data)

    return(
        <div>
            {}
        </div>
    )
}

export default Details;