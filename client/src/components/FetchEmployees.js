import {Link} from "react-router-dom";

const FetchEmployees = ({data}) => {

    console.log(data)

    return(
        <div>
			<div className="-mx-4 sm:-mx-8 px-4 sm:px-8 pb-4 overflow-x-auto">
				<div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
					<table className="min-w-full ">
						<thead>
							<tr>
								<th scope="col" className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800 text-left text-sm uppercase font-normal">
									<span className="ml-28">User</span>
								</th>
								<th scope="col" className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-center text-sm uppercase font-normal">
									Department
								</th>
								<th scope="col" className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-center text-sm uppercase font-normal">
									Created_at
								</th>
								<th scope="col" className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-center text-sm uppercase font-normal">
									Gender
								</th>
								<th scope="col-full" className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-center text-sm uppercase font-normal">
									Status
								</th>
								<th scope="col" className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-center text-sm uppercase font-normal">
									<span className="sr-only ">Details</span>
								</th>
								
							</tr>
						</thead>
						<tbody>
						{ 
						data ?
						 (data.map(data => (
							<tr key={data._id} className="">
								<td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
									<div className="flex ">
										<div className="flex-shrink-0 h-10 w-10">
											<img className="h-10 w-10 rounded-full" src={data.photo} alt="" />
										</div>
										<div className="ml-4 ">
											<div className='space-x-2'>
												<span className="text-sm font-medium text-gray-900">
													{data.name.first_name}
												</span>
												<span className="text-sm font-medium text-gray-900">
													{ data.name.middle_name}
												</span>
											</div>
											
											<div className="text-sm text-gray-500">
												{ data.email }
											</div>
										</div>
									</div>
								</td>
								<td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
									<p className="text-gray-900 whitespace-no-wrap">
										{ data.department}
									</p>
								</td>
								<td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
									<p className="text-gray-900 whitespace-no-wrap">
										{ data.employment_date}
									</p>
								</td>
								<td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
									<p className="text-gray-900 whitespace-no-wrap">
										{ data.gender}
									</p>
								</td>
								<td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
									<span className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
										<span aria-hidden="true" className="absolute inset-0 bg-green-200 opacity-50 rounded-full">
										</span>
										<span className="relative">
											active
										</span>
									</span>
								</td>
								<td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
									<Link to={`/details/${data._id}`} className="text-indigo-600 hover:text-indigo-900">
										details
									</Link>
								</td>
								
							</tr>)
							) )
							: "loading" 
							}
							</tbody>
					</table>
					<div className="px-5 bg-white py-5 flex flex-col xs:flex-row items-center xs:justify-between">
						<div className="flex items-center">
						</div>
					</div>
				</div>
			</div> 
        </div>
    )
}

export default FetchEmployees