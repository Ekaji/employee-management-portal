import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
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

    console.log(data)

    return(
      <div>
      {data === null ? (<>loading... </>) : (
        <>
         <div className=' md:grid md:grid-cols-2 md:mx-auto md:w-3/4 md:gap-6'>
          <div className='my-5 md:mt-0 md:col-span-2'>
            <div className='flex justify-end space-x-4'>
             <span>
              <button onClick={handleisInputEditable} className="px-4 py-2 rounded-md text-sm font-medium border focus:outline-none focus:ring transition text-gray-600 border-purple-700 hover:text-white hover:bg-purple-700 active:bg-gray-700 focus:ring-gray-300" type="submit">Edit</button>
             </span>
             <span>
            <button className="px-4 py-2 rounded-md text-sm font-medium border focus:outline-none focus:ring transition text-gray-600 border-red-700 hover:text-white hover:bg-red-700 active:bg-gray-700 focus:ring-gray-300" type="submit">Delete</button>
             </span>
            </div>
          </div>
         </div>
            { data !== null && !isInputEditable ?
            (
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


          <div className="text-left flex-auto px-4 lg:px-10 py-10 pt-0">
            <form>
              <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
                User Information
              </h6>
              <div className="flex flex-wrap">
                
                <div className="w-full lg:w-6/12 px-4">
                  <div className="relative w-full mb-3">
                    <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlfor="grid-password">
                      First Name
                    </label>
                    <input disabled={!isInputEditable} type="text" className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" value={data.employe.name.first_name} />
                  </div>
                </div>
                <div className="w-full lg:w-6/12 px-4">
                  <div className="relative w-full mb-3">
                    <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlfor="grid-password">
                      Last Name
                    </label>
                    <input disabled={!isInputEditable} type="text" className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" value={data.employe.name.last_name} />
                  </div>
                </div>
                <div className="w-full lg:w-6/12 px-4">
                  <div className="relative w-full mb-3">
                    <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlfor="grid-password">
                      Middle Name
                    </label>
                    <input disabled={!isInputEditable} type="text" className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" value={data.employe.name.middle_name} />
                  </div>
                </div>
                <div className="w-full lg:w-6/12 px-4">
                  <div className="relative w-full mb-3">
                    <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlfor="grid-password">
                      Email address
                    </label>
                    <input disabled={!isInputEditable} type="email" className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" value={data.employe.email} />
                  </div>
                </div>

                 <div className="w-full lg:w-6/12 px-4">
                  <div className="relative w-full mb-3">
                    <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlfor="grid-password">
                      Phone
                    </label>
                    <input disabled={!isInputEditable} type="number" className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" value={data.employe.phone} />
                  </div>
                </div>
               <div className="w-full lg:w-6/12 px-4">
                        <label htmlFor="country" className="block text-sm font-medium uppercase text-gray-700">gender</label>
                        <select id="country" name="gender" value={data.employe.gender} onChange={''} className={`mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`} >
                          <option value=""></option>
                          <option value="male">male</option>
                          <option value="female">female</option>
                        </select>
                      </div>

              </div>

             

              <hr className="mt-6 border-b-1 border-blueGray-300" />

              <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
                Contact Information
              </h6>
              <div className="flex flex-wrap">
                <div className="w-full lg:w-12/12 px-4">
                  <div className="relative w-full mb-3">
                    <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlfor="grid-password">
                      Address
                    </label>
                    <input disabled={!isInputEditable} type="text" className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" value={data.employe.address} />
                  </div>
                </div>
              </div>

              <hr className="mt-6 border-b-1 border-blueGray-300" />

               <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
                Employment Information
              </h6>
              <div className="flex flex-wrap">
                <div className="w-full lg:w-12/12 px-4">
                  <div className="relative w-full mb-3">
                    <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlfor="grid-password">
                      Department
                    </label>
                    <input disabled={!isInputEditable} type="text" className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" value={data.employe.department} />
                  </div>
                </div>
                <div className="w-full lg:w-4/12 px-4">
                  <div className="relative w-full mb-3">
                    <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlfor="grid-password">
                      Date Of Employment
                    </label>
                    <input disabled={!isInputEditable} type="email" className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" value={data.employe.employment_date}  />
                  </div>
                </div>
                <div className="w-full lg:w-4/12 px-4">
                  <div className="relative w-full mb-3">
                    <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlfor="grid-password">
                      Date Of Terminaion
                    </label>
                    <input disabled={!isInputEditable} type="text" className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" value={data.employe.termination_date}  />
                  </div>
                </div>
              </div>

              <hr className="mt-6 border-b-1 border-blueGray-300" />

               <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
                Bank Account Information
              </h6>
              <div className="flex flex-wrap">
                <div className="w-full lg:w-12/12 px-4">
                  <div className="relative w-full mb-3">
                    <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlfor="grid-password">
                      Account Name
                    </label>
                    <input disabled={!isInputEditable} type="text" className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" value={data.employe.account_details.account_name} />
                  </div>
                </div>
                <div className="w-full lg:w-4/12 px-4">
                  <div className="relative w-full mb-3">
                    <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlfor="grid-password">
                      Account Number
                    </label>
                    <input disabled={!isInputEditable} type="email" className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" value={data.employe.account_details.account_number} />
                  </div>
                </div>
                <div className="w-full lg:w-4/12 px-4">
                  <div className="relative w-full mb-3">
                    <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlfor="grid-password">
                      Bank Name
                    </label>
                    <input disabled={!isInputEditable} type="text" className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" value={data.employe.account_details.bank_name} />
                  </div>
                </div>
                <div className="w-full lg:w-4/12 px-4">
                  <div className="relative w-full mb-3">
                    <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlfor="grid-password">
                      Wage
                    </label>
                    <input disabled={!isInputEditable} type="text" className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" value={data.employe.wage} />
                  </div>
                </div>
              </div>

              <hr className="mt-6 border-b-1 border-blueGray-300" />

              <div className="flex flex-wrap">
                <div className="w-full lg:w-12/12 px-4">
                  <div className="relative w-full mb-3">
                    <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlfor="grid-password">
                      Remarks
                    </label>
                    <textarea type="text" className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" rows="4"> A beautiful UI Kit and Admin for JavaScript &amp; Tailwind CSS. It is Freeand Open Source.</textarea>
                  </div>
                </div>
              </div>
            </form>
          </div>



            </div>
            </div>
            </div>
              </form>
              <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                    <button onClick={''} className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                      Save
                    </button>
        
                  </div>
                  </div>
                    </div>
            ) : 
            
            (
            <div className="md:grid md:grid-cols-2 md:mx-auto md:w-3/4 md:gap-6">
            <div className="mt-5 md:mt-0 md:col-span-2">
              <form>
                <div className="shadow overflow-hidden sm:rounded-md">
                  <div className="px-4 py-5 bg-white sm:p-6">
                    <div className='grid' >


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


          <div className="text-left flex-auto px-4 lg:px-10 py-10 pt-0">
            <form>
              <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
                User Information
              </h6>
              <div className="flex flex-wrap">
                
                <div className="w-full lg:w-6/12 px-4">
                  <div className="relative w-full mb-3">
                    <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlfor="grid-password">
                      First Name
                    </label>
                    <input  type="text" className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" value={data.employe.name.first_name} />
                  </div>
                </div>
                <div className="w-full lg:w-6/12 px-4">
                  <div className="relative w-full mb-3">
                    <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlfor="grid-password">
                      Last Name
                    </label>
                    <input  type="text" className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" value={data.employe.name.last_name} />
                  </div>
                </div>
                <div className="w-full lg:w-6/12 px-4">
                  <div className="relative w-full mb-3">
                    <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlfor="grid-password">
                      Middle Name
                    </label>
                    <input  type="text" className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" value={data.employe.name.middle_name} />
                  </div>
                </div>
                <div className="w-full lg:w-6/12 px-4">
                  <div className="relative w-full mb-3">
                    <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlfor="grid-password">
                      Email address
                    </label>
                    <input  type="email" className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" value={data.employe.email} />
                  </div>
                </div>

                 <div className="w-full lg:w-6/12 px-4">
                  <div className="relative w-full mb-3">
                    <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlfor="grid-password">
                      Phone
                    </label>
                    <input  type="number" className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" value={data.employe.phone} />
                  </div>
                </div>
               <div className="w-full lg:w-6/12 px-4">
                        <label htmlFor="country" className="block text-sm font-medium uppercase text-gray-700">gender</label>
                        <select id="country" name="gender" value={data.employe.gender} onChange={''} className={`mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`} >
                          <option value=""></option>
                          <option value="male">male</option>
                          <option value="female">female</option>
                        </select>
                      </div>

              </div>

             

              <hr className="mt-6 border-b-1 border-blueGray-300" />

              <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
                Contact Information
              </h6>
              <div className="flex flex-wrap">
                <div className="w-full lg:w-12/12 px-4">
                  <div className="relative w-full mb-3">
                    <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlfor="grid-password">
                      Address
                    </label>
                    <input  type="text" className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" value={data.employe.address} />
                  </div>
                </div>
              </div>

              <hr className="mt-6 border-b-1 border-blueGray-300" />

               <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
                Employment Information
              </h6>
              <div className="flex flex-wrap">
                <div className="w-full lg:w-12/12 px-4">
                  <div className="relative w-full mb-3">
                    <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlfor="grid-password">
                      Department
                    </label>
                    <input  type="text" className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" value={data.employe.department} />
                  </div>
                </div>
                <div className="w-full lg:w-4/12 px-4">
                  <div className="relative w-full mb-3">
                    <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlfor="grid-password">
                      Date Of Employment
                    </label>
                    <input  type="email" className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" value={data.employe.employment_date}  />
                  </div>
                </div>
                <div className="w-full lg:w-4/12 px-4">
                  <div className="relative w-full mb-3">
                    <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlfor="grid-password">
                      Date Of Terminaion
                    </label>
                    <input  type="text" className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" value={data.employe.termination_date}  />
                  </div>
                </div>
              </div>

              <hr className="mt-6 border-b-1 border-blueGray-300" />

               <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
                Bank Account Information
              </h6>
              <div className="flex flex-wrap">
                <div className="w-full lg:w-12/12 px-4">
                  <div className="relative w-full mb-3">
                    <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlfor="grid-password">
                      Account Name
                    </label>
                    <input  type="text" className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" value={data.employe.account_details.account_name} />
                  </div>
                </div>
                <div className="w-full lg:w-4/12 px-4">
                  <div className="relative w-full mb-3">
                    <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlfor="grid-password">
                      Account Number
                    </label>
                    <input  type="email" className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" value={data.employe.account_details.account_number} />
                  </div>
                </div>
                <div className="w-full lg:w-4/12 px-4">
                  <div className="relative w-full mb-3">
                    <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlfor="grid-password">
                      Bank Name
                    </label>
                    <input  type="text" className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" value={data.employe.account_details.bank_name} />
                  </div>
                </div>
                <div className="w-full lg:w-4/12 px-4">
                  <div className="relative w-full mb-3">
                    <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlfor="grid-password">
                      Wage
                    </label>
                    <input  type="text" className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" value={data.employe.wage} />
                  </div>
                </div>
              </div>

              <hr className="mt-6 border-b-1 border-blueGray-300" />

              <div className="flex flex-wrap">
                <div className="w-full lg:w-12/12 px-4">
                  <div className="relative w-full mb-3">
                    <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlfor="grid-password">
                      Remarks
                    </label>
                    <textarea type="text" className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" rows="4"> A beautiful UI Kit and Admin for JavaScript &amp; Tailwind CSS. It is Freeand Open Source.</textarea>
                  </div>
                </div>
              </div>
            </form>
            
          </div>

            </div>
            </div>
            </div>

              </form>
              <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                    <button onClick={''} className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                      Save
                    </button>
        
                  </div>
                  </div>
                  
                    </div>
            )}
            </>
            )}

            
        </div>
    )
}

export default Details;