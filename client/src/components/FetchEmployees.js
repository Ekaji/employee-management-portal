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
						{ data !== null ? data.employe.map(data => (
							<tr key={data._id} className="">
								<td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
									<div className="flex ">
										<div className="flex-shrink-0 h-10 w-10">
											<img className="h-10 w-10 rounded-full" src={data.photo} alt="" />
										</div>
										<div className="ml-4">
											<div className="text-sm font-medium text-gray-900">
												{data.name.first_name}
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
								
							</tr>
							) ): "loading" }
							</tbody>
					</table>
					<div className="px-5 bg-white py-5 flex flex-col xs:flex-row items-center xs:justify-between">
						<div className="flex items-center">
							{/* <button type="button" className="w-full p-4 border text-base rounded-l-xl text-gray-600 bg-white hover:bg-gray-100">
								<svg width="9" fill="currentColor" height="8" className="" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
									<path d="M1427 301l-531 531 531 531q19 19 19 45t-19 45l-166 166q-19 19-45 19t-45-19l-742-742q-19-19-19-45t19-45l742-742q19-19 45-19t45 19l166 166q19 19 19 45t-19 45z">
									</path>
								</svg>
							</button>
							<button type="button" className="w-full px-4 py-2 border-t border-b text-base text-indigo-500 bg-white hover:bg-gray-100 ">
								1
							</button>
							<button type="button" className="w-full px-4 py-2 border text-base text-gray-600 bg-white hover:bg-gray-100">
								2
							</button>
							<button type="button" className="w-full px-4 py-2 border-t border-b text-base text-gray-600 bg-white hover:bg-gray-100">
								3
							</button>
							<button type="button" className="w-full px-4 py-2 border text-base text-gray-600 bg-white hover:bg-gray-100">
								4
							</button>
							<button type="button" className="w-full p-4 border-t border-b border-r text-base  rounded-r-xl text-gray-600 bg-white hover:bg-gray-100">
								<svg width="9" fill="currentColor" height="8" className="" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
									<path d="M1363 877l-742 742q-19 19-45 19t-45-19l-166-166q-19-19-19-45t19-45l531-531-531-531q-19-19-19-45t19-45l166-166q19-19 45-19t45 19l742 742q19 19 19 45t-19 45z">
									</path>
								</svg>
							</button> */}
						</div>
					</div>
				</div>
			</div> 
        </div>
    )
}

export default FetchEmployees