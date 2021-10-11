import {useState, useEffect} from 'react'
import axios from 'axios'

const FetchEmployees = () => {

    const [data, setData] = useState(null)
    
    const getItems = async () => {
       await axios.get('/api/employe')
            .then(response => setData(response.data))
            .catch((error) => {
                console.log(error)
            })
    }

    useEffect(() => {
        getItems()
    },[])

    console.log(data)

    return(
        <div>
{/* <link
	href="https://fonts.googleapis.com/css?family=Material+Icons|Material+Icons+Outlined|Material+Icons+Two+Tone|Material+Icons+Round|Material+Icons+Sharp"
	rel="stylesheet"> */}
<div className="flex items-center justify-center min-h-screen bg-gray-900">
	<div className="col-span-12">
		<div className="overflow-auto lg:overflow-visible ">
			<table className="table text-gray-400 border-separate space-y-6 text-sm">
				<thead className="bg-gray-800 text-gray-500">
					<tr>
						<th className="p-3">Name & Email</th>
						<th className="p-3 text-left">Department</th>
						<th className="p-3 text-left">Price</th>
						<th className="p-3 text-left">employed</th>
						<th className="p-3 text-left">ID</th>
					</tr>
				</thead>
                { data !== null ? data.employe.map(data => (
                <tbody>
					<tr className="bg-gray-800">
						<td className="p-3">
							<div className="flex align-items-center">
								<img className="rounded-full h-12 w-12   object-cover" src="https://images.unsplash.com/photo-1600856209923-34372e319a5d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2135&q=80" alt="unsplash" />
								<div className="ml-3">
									<div className="">{data.name}</div>
									<div className="text-gray-500">{data.email}</div>
								</div>
							</div>
						</td>
						<td className="p-3">
							Technology
						</td>
						<td className="p-3 font-bold">
							200.00$
						</td>
						<td className="p-3">
							<span className="bg-yellow-400 text-gray-50  rounded-md px-2">start sale</span>
						</td>
						<td className="p-3">
							<a href="/#" className="text-gray-400 hover:text-gray-100 mr-2">
								<i className="material-icons-outlined text-base">visibility</i>
							</a>
							<a href="/#" className="text-gray-400 hover:text-gray-100 mx-2"> {/* button  */} 
								<i className="material-icons-outlined text-base">Details</i>
							</a>
						</td>
					</tr>
				</tbody>
                ) ) : "loading"}
				
			</table>
		</div>
	</div>
</div>
<style>
	
</style>
        </div>
    )
}

export default FetchEmployees