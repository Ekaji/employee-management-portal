import {Link} from "react-router-dom";

const Header = () => {
    return(
        <>
        <div className="flex flex-row mb-1 mb-8 justify-between w-full bg-gray-200">
            {/* <h2 className="text-2xl leading-tight">
                Users
            </h2> */}
            <div className="">
                <div className="flex">
                    <form className="flex flex-col md:flex-row w-3/4 md:w-full max-w-sm md:space-x-3 space-y-3 md:space-y-0 justify-center">
                        <div className=" relative ">
                            <input type="text" id="&quot;form-subscribe-Filter" className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" placeholder="name"/>
                        </div>
                        <button className="flex-shrink-0 px-4 py-2 text-base font-semibold text-white bg-purple-600 rounded-lg shadow-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-purple-200" type="submit">
                            Filter
                        </button>
                    </form>
                    <form> 
                        <div className=" flex w-48">
                            <label htmlFor="country" className="w-16 my-auto text-sm font-medium text-gray-700">Sort by</label>
                            <select id="country" name="gender" value={''} onChange={''} className="mt-1 block w-28 py-2 px-3 border border-gray-300 text-gray-400 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" >
                            <option value="">All</option>
                            <option value="male">Departent</option>
                            <option value="female">Start Date</option>
                            <option value="female">Status</option>

                            </select>
                        </div>
                    </form>
                </div> 
            </div>
            <Link to='/create'>
                <button class="px-4 py-2 rounded-md text-sm font-medium border focus:outline-none focus:ring transition text-gray-600 border-purple-700 hover:text-white hover:bg-purple-700 active:bg-gray-700 focus:ring-gray-300" type="submit">Add employe</button>
            </Link>
		</div>
        </>
    )
}

export default Header