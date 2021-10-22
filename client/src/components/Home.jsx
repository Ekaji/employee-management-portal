import {useState, useEffect} from 'react'
import axios from 'axios'
import FetchEmployees from "./FetchEmployees";
import Header from "./Header";

const Home = () => {

       const [unFilteredData, setUnFilteredData] = useState([])
       const [searchResult, setSearchResult] = useState()
    
    const getItems = async () => {
    await axios.get('/api/employe')

            .then(response => { 
                setUnFilteredData(response.data)
             })
            .catch((error) => {
                console.log(error)
            })
    }

    useEffect((e) => {
        getItems()
    },[])


    const handleSearch = (e) => {
        e.preventDefault()
        if (searchResult && e.target.value === '') {
			setSearchResult(unFilteredData)
		}
        const filtered = unFilteredData.employe.filter((data) => {
            const regex = new RegExp(`${e.target.value}`, 'ig')
            console.log(regex)
			return data.name.first_name.match(regex) || data.name.last_name.match(regex) || data.name.middle_name.match(regex)
		})
		setSearchResult(filtered)
    }


    const data = searchResult ? searchResult : unFilteredData.employe

    return(
        <>
            <Header handleSearch={handleSearch} />
            <FetchEmployees data={data} />
        </>
    )
}

export default Home