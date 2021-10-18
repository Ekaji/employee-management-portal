import {useState, useEffect} from 'react'
import axios from 'axios'
import FetchEmployees from "./FetchEmployees";
import Header from "./Header";

const Home = () => {

       const [data, setData] = useState(null)
    
    const getItems = async () => {
    await axios.get('/api/employe')

            .then(response => setData(response.data ))
            .catch((error) => {
                console.log(error)
            })
    }

    useEffect(() => {
        getItems()
    },[])

    return(
        <>
            <Header filter={''} />
            <FetchEmployees data={data} />
        </>
    )
}

export default Home