import { useState, useEffect} from 'react'
import axios from 'axios'

const Form = () => {
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

    const [isImageUploaded, setIsImageUploaded] = useState(false)
    const uploadImage = async () => {
      if(!image) return
      setIsImageUploaded(true)
      updateformDetails({ ...formDetails, photo : '' }) // incase of reupload
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
      uploadImage()
    }, [image])

    console.log(formDetails)


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

    return(
        <div className="mt-10 sm:mt-0 mx-auto">
          <div className="md:grid md:grid-cols-2 md:mx-auto md:w-3/4 md:gap-6">
            <div className="mt-5 md:mt-0 md:col-span-2">
              <form>
                <div className="shadow overflow-hidden sm:rounded-md">
                  <div className="px-4 py-5 bg-white sm:p-6">
                    <div className="grid grid-cols-6 gap-6">


                      <div className="col-span-6 sm:col-span-6">
                        <label className="w-64 flex flex-col items-center px-4 py-6 bg-white rounded-md shadow-md tracking-wide uppercase border border-blue cursor-pointer hover:bg-purple-600 hover:text-white text-purple-600 ease-linear transition-all duration-150">
                          <i className="fas fa-cloud-upload-alt fa-3x"></i>
                          {formDetails.photo ? <></> : (<span className="mt-2 text-base leading-normal">Select a photo</span>)}
                          
                          <input type='file' name="photo" className="hidden"  onChange={ handleFileChange } />
                          {isImageUploaded ? (
                            <div className={formDetails.photo ? 'hidden' : "" }> uploading photo... please wait</div>
                          ) : <></>}
                          
                          {formDetails.photo ? (<img alt='employe' src={formDetails.photo} />) : <></> }
                        </label>
                      </div>

                      <div className="col-span-6 sm:col-span-3">
                        <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">First name</label>
                        <input type="text" name="first_name" id="first-name" value={formDetails.first_name} onChange={handleFormChange} className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                      </div>

                      <div className="col-span-6 sm:col-span-3">
                        <label htmlFor="last-name" className="block text-sm font-medium text-gray-700">Last name</label>
                        <input type="text" name="last_name" id="last-name" value={formDetails.last_name}  onChange={handleFormChange} className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                      </div>

                      <div className="col-span-6 sm:col-span-3">
                        <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">middle name</label>
                        <input type="text" name="middle_name" id="first-name" value={formDetails.middle_name}  onChange={handleFormChange} className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                      </div>

                      <div className="col-span-6 sm:col-span-4">
                        <label htmlFor="email-address" className="block text-sm font-medium text-gray-700">Email address</label>
                        <input type="text" name="email" id="email-address" value={formDetails.email}  onChange={handleFormChange} className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                      </div>

                      <div className="col-span-6 md:col-span-3 sm:col-span-2">
                        <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">phone</label>
                        <input type="text" name="phone" id="first-name" value={formDetails.phone}  onChange={handleFormChange} className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                      </div>

                      <div className="col-span-6 sm:col-span-3">
                        <label htmlFor="country" className="block text-sm font-medium text-gray-700">gender</label>
                        <select id="country" name="gender" value={formDetails.gender} onChange={handleFormChange} className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" >
                          <option value=""></option>
                          <option value="male">male</option>
                          <option value="female">female</option>
                        </select>
                      </div>

                      <div className="col-span-6">
                        <label htmlFor="street-address" className="block text-sm font-medium text-gray-700">home address</label>
                        <input type="text" name="address" value={formDetails.address} onChange={handleFormChange} className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"/>
                      </div>

                      <div className="col-span-6 md:col-span-3 sm:col-span-3 ">
                        <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">department</label>
                        <input type="text" name="department" id="first-name" value={formDetails.department}  onChange={handleFormChange} className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                      </div>

                      <div className="col-span-6 sm:col-span-3">
                        <label htmlFor="last-name" className="block text-sm font-medium text-gray-700">date of employment</label>
                        <input type="text" name="employment_date" id="last-name" value={formDetails.employment_date}  onChange={handleFormChange} className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                      </div>

                      <div className="col-span-6 sm:col-span-3">
                        <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">date of termination</label>
                        <input type="text" name="termination_date" id="first-name" value={formDetails.termination_date}  onChange={handleFormChange} className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                      </div>

                      <div className="col-span-6 sm:col-span-6 lg:col-span-6">
                        <label htmlFor="city" className="block text-sm text-left font-medium text-gray-700 uppercase ">bank account details</label>
                      </div>

                      <div className="col-span-6 sm:col-span-3">
                        <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">Account name</label>
                        <input type="text" name="account_name" value={formDetails.account_name} onChange={handleFormChange} className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                      </div>

                      <div className="col-span-6 sm:col-span-3">
                        <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">account_number</label>
                        <input type="text" name="account_number" value={formDetails.account_number} onChange={handleFormChange} className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                      </div>

                      <div className="col-span-6 sm:col-span-3">
                        <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">bank name</label>
                        <input type="text" name="bank_name" value={formDetails.bank_name} onChange={handleFormChange} className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                      </div>

                      <div className="col-span-6 sm:col-span-3">
                        <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">wage</label>
                        <input type="text" name="wage" value={formDetails.wage} onChange={handleFormChange} className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                      </div>

                    </div>
                  </div>
                  <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                    <button onClick={handleFormSubmit} className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                      Save
                    </button>
        
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
    )
}

export default Form