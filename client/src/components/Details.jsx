import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import {Link} from "react-router-dom";
import axios from 'axios'

const Details = () => {
    const { id } = useParams()
    const [data, setData] = useState(null)
    
    useEffect(() => {
        axios.get(`/api/employe/${id}`)
            .then(response => response.data )
            .then(data => setData( data ))
            .catch((error) => {
                console.log(error)
            })
    },[id])


    // const isImageUploaded = true

    const cloudinaryUri = process.env.REACT_APP_CLOUDINARY_URI

  const [formDetails, updateformDetails] = useState({
      first_name: '',
      last_name: '',
      middle_name: '',
      address: '',
      email: '',
      phone: '',
      gender: '',
      photo: '',
      department: '',
      employment_date: '',
      termination_date: '',
      wage: '',
      account_name: '',
      account_number: '',
      bank_name: '',
  })

    const [image, setImage] = useState("");

    const handleFileChange = (e) => {
      if(e.target.files.length !== 0){
        setImage(e.target.files[0])
      }
    }

    const [isImageUploaded, setIsImageUploaded] = useState(!false);

    const uploadImage = async () => {
      // if(!image) return
      setIsImageUploaded(true)
      updateformDetails( { ...formDetails, photo : '' }) // incase of reupload
      const data = new FormData()
      data.append("file", image)
      data.append("upload_preset", "employe image")
      data.append("cloud_name", "dtshe5gsz")

      await axios.post( cloudinaryUri, data )
        .then(resp => resp.data)
        .then(data => updateformDetails({ ...formDetails, photo : data.url }))
        .catch(err => console.log(err))
      }

    useEffect(() => {
     if(image) uploadImage()
    }, [image]);

    const handleFormChange = (e) => {
        updateformDetails({
        ...formDetails, [e.target.name] : e.target.value
        })   
    } 

    const handleFormSubmit = (e) => {
        e.preventDefault()
        axios.post('/api/employe', formDetails)
        .then(response => console.log({response}))
        .catch((error) => {console.error(error)})
    }

    const [isInputEditable, setisInputEditable] = useState(false)

    const handleisInputEditable = () => {
        setisInputEditable(!isInputEditable)
    }

    console.log(isInputEditable)

    return(
        <div>
         <div className=' md:grid md:grid-cols-2 md:mx-auto md:w-3/4 md:gap-6'>
          <div className='my-5 md:mt-0 md:col-span-2'>
            <div className='flex justify-end space-x-4'>
             <span>
              <button onClick={handleisInputEditable} class="px-4 py-2 rounded-md text-sm font-medium border focus:outline-none focus:ring transition text-gray-600 border-purple-700 hover:text-white hover:bg-purple-700 active:bg-gray-700 focus:ring-gray-300" type="submit">Edit</button>
             </span>
             <span>
            <button class="px-4 py-2 rounded-md text-sm font-medium border focus:outline-none focus:ring transition text-gray-600 border-red-700 hover:text-white hover:bg-red-700 active:bg-gray-700 focus:ring-gray-300" type="submit">Delete</button>
             </span>
            </div>
          </div>
         </div>
        {/* <div className="mt-10 sm:mt-0 mx-auto "> */}
            {data !== null ?  (
          <div className="md:grid md:grid-cols-2 md:mx-auto md:w-3/4 md:gap-6">
            <div className="mt-5 md:mt-0 md:col-span-2">
              <form>
                <div className="shadow overflow-hidden sm:rounded-md">
                  <div className="px-4 py-5 bg-white sm:p-6">
                    <div className={`${isInputEditable ? 'grid grid-cols-6 gap-6' : 'grid' } `}>


                      <div className="col-span-6 sm:col-span-6">
                        <label className="w-64 flex flex-col items-center px-4 py-6 bg-white rounded-md shadow-md tracking-wide uppercase border border-blue cursor-pointer hover:bg-purple-600 hover:text-white text-purple-600 ease-linear transition-all duration-150">
                          <i className="fas fa-cloud-upload-alt fa-3x"></i>
                          {data.employe.photo ? <></> : (<span className="mt-2 text-base leading-normal">Select a photo</span>)}
                          
                          <input type='file' name="photo" className="hidden"  onChange={ '' } />
                          {isImageUploaded ? (
                            <div className={data.employe.photo ? 'hidden' : "" }> uploading photo... please wait</div>
                          ) : <></>}
                          
                          {data.employe.photo ? (<img alt='employe' src={data.employe.photo} />) : <></> }
                        </label>
                      </div>
                    {/* <div className='grid grid-col-6'>  */}
                      <div className='col-span-6 sm:col-span-2 '>
                        <label htmlFor="first-name" className="py-2 w-1  font-medium uppercase text-gray-700">{isInputEditable ? 'First name' : 'name :'}</label>  
                        <input disabled={!isInputEditable} type="text" placeholder={data.employe.name.first_name || ''} name="first_name" id="first-name" value={data.employe.name.first_name} onChange={''} className={`mt-1 focus:ring-indigo-500 focus:border-indigo-500  rounded-md ${isInputEditable ? 'block w-full shadow-sm sm:text-sm border-gray-300' : 'border-none' }`} />
                      </div>

                      <div className={`${isInputEditable ? 'col-span-6 sm:col-span-2 ' : 'grid grid-cols'} `}>
                        <label htmlFor="last-name" className={`${isInputEditable ? '' : 'hidden'} text-sm font-medium uppercase text-gray-700`}>last name</label>
                        <input disabled={!isInputEditable}  type="text" placeholder={data.employe.name.last_name} name="last_name" id="last-name" value={data.employe.name.last_name}  onChange={''} className={`mt-1 focus:ring-indigo-500 focus:border-indigo-500  rounded-md ${isInputEditable ? 'block w-full shadow-sm sm:text-sm border-gray-300' : 'border-none' }`} />
                      </div>

                      <div className={`${isInputEditable ? 'col-span-6 sm:col-span-2 ' : 'grid grid-cols'} `}>
                        <label htmlFor="middle-name" className={`${isInputEditable ? '' : 'hidden'} text-sm font-medium uppercase text-gray-700`} >middle name </label>
                        <input disabled={!isInputEditable}  type="text" placeholder={data.employe.name.middle_name} name="middle_name" id="first-name" value={data.middle_name}  onChange={''} className={`mt-1 focus:ring-indigo-500 focus:border-indigo-500  rounded-md ${isInputEditable ? 'block w-full shadow-sm sm:text-sm border-gray-300' : 'border-none' }`} />
                      </div>
                    {/* </div> */}

                    </div>


                    <div className='mt-5'>
                        <div className="col-span-6 sm:col-span-4">
                        <label htmlFor="email-address" className=" text-sm font-medium uppercase text-gray-700">Email address</label>
                        <input disabled={!isInputEditable}  type="text" placeholder={data.employe.email} name="email" id="email-address" value={data.email}  onChange={''} className={`mt-1 focus:ring-indigo-500 focus:border-indigo-500  rounded-md ${isInputEditable ? 'block w-full shadow-sm sm:text-sm border-gray-300' : 'border-none' }`} />
                      </div>

                      <div className="col-span-6 md:col-span-3 sm:col-span-2">
                        <label htmlFor="first-name" className="block text-sm font-medium uppercase text-gray-700">phone</label>
                        <input disabled={!isInputEditable}  type="text" placeholder={data.employe.phone} name="phone" id="first-name" value={data.phone}  onChange={''} className={`mt-1 focus:ring-indigo-500 focus:border-indigo-500 rounded-md ${isInputEditable ? 'block w-full shadow-sm sm:text-sm border-gray-300' : 'border-none' }`} />
                      </div>

                      <div className="col-span-6 sm:col-span-3">
                        <label htmlFor="country" className="block text-sm font-medium uppercase text-gray-700">gender</label>
                        <select id="country" name="gender" value={data.employe.gender} onChange={''} className={`mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`} >
                          <option value=""></option>
                          <option value="male">male</option>
                          <option value="female">female</option>
                        </select>
                      </div>

                      <div className="col-span-6">
                        <label htmlFor="street-address" className="block text-sm font-medium uppercase text-gray-700">home address</label>
                        <input disabled={!isInputEditable}  type="text" placeholder={data.employe.address} name="address" value={data.address} onChange={''} className={`mt-1 focus:ring-indigo-500 focus:border-indigo-500  rounded-md ${isInputEditable ? 'block w-full shadow-sm sm:text-sm border-gray-300' : 'border-none' }`} />
                      </div>

                      <div className="col-span-6 md:col-span-3 sm:col-span-3 ">
                        <label htmlFor="first-name" className="block text-sm font-medium uppercase text-gray-700">department</label>
                        <input disabled={!isInputEditable}  type="text" placeholder={data.employe.department} name="department" id="first-name" value={data.department}  onChange={''} className={`mt-1 focus:ring-indigo-500 focus:border-indigo-500 rounded-md ${isInputEditable ? 'block w-full shadow-sm sm:text-sm border-gray-300' : 'border-none' }`} />
                      </div>

                      <div className="col-span-6 sm:col-span-3">
                        <label htmlFor="last-name" className="block text-sm font-medium uppercase text-gray-700">date of employment</label>
                        <input disabled={!isInputEditable}  type="text" placeholder={data.employe.employment_date} name="employment_date" id="last-name" value={data.employment_date}  onChange={''} className={`mt-1 focus:ring-indigo-500 focus:border-indigo-500 rounded-md ${isInputEditable ? 'block w-full shadow-sm sm:text-sm border-gray-300' : 'border-none' }`} />
                      </div>

                      <div className="col-span-6 sm:col-span-3">
                        <label htmlFor="first-name" className="block text-sm font-medium uppercase text-gray-700">date of termination</label>
                        <input disabled={!isInputEditable}  type="text" placeholder={data.employe.termination_date} name="termination_date" id="first-name" value={data.termination_date}  onChange={''} className={`mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full rounded-md ${isInputEditable ? 'shadow-sm sm:text-sm border-gray-300' : 'border-none' }`} />
                      </div>

                      <div className="col-span-6 sm:col-span-6 lg:col-span-6">
                        <label htmlFor="city" className="block text-sm text-left font-medium uppercase text-gray-700 uppercase ">bank account details</label>
                      </div>

                      <div className="col-span-6 sm:col-span-3">
                        <label htmlFor="first-name" className="block text-sm font-medium uppercase text-gray-700">Account name</label>
                        <input disabled={!isInputEditable}  type="text" placeholder={data.employe.account_details.account_name} name="account_name" value={data.account_name} onChange={''} className={`mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full rounded-md ${isInputEditable ? 'shadow-sm sm:text-sm border-gray-300' : 'border-none' }`} />
                      </div>

                      <div className="col-span-6 sm:col-span-3">
                        <label htmlFor="first-name" className="block text-sm font-medium uppercase text-gray-700">account_number</label>
                        <input disabled={!isInputEditable}  type="text" placeholder={data.employe.account_details.account_number} name="account_number" value={data.account_number} onChange={''} className={`mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full rounded-md ${isInputEditable ? 'shadow-sm sm:text-sm border-gray-300' : 'border-none' }`} />
                      </div>

                      <div className="col-span-6 sm:col-span-3">
                        <label htmlFor="first-name" className="block text-sm font-medium uppercase text-gray-700">bank name</label>
                        <input disabled={!isInputEditable}  type="text" placeholder={data.employe.account_details.bank_name} name="bank_name" value={data.bank_name} onChange={''} className={`mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full rounded-md ${isInputEditable ? 'shadow-sm sm:text-sm border-gray-300' : 'border-none' }`} />
                      </div>

                      <div className="col-span-6 sm:col-span-3">
                        <label htmlFor="first-name" className="block text-sm font-medium uppercase text-gray-700">wage</label>
                        <input disabled={!isInputEditable}  type="text" placeholder={data.employe.wage} name="wage" value={data.wage} onChange={''} className={`mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full rounded-md ${isInputEditable ? 'shadow-sm sm:text-sm border-gray-300' : 'border-none' }`} />
                      </div>

                    </div>





                  </div>
                  <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                    <button onClick={''} className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                      Save
                    </button>
        
                  </div>
                </div>
              </form>
            </div>
          </div> ) : <></> }
        </div>
        // </div>
    )
}

export default Details;