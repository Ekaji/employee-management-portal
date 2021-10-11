import { useState } from 'react'
import axios from 'axios'


const CreateEmployeesForm = () => {

    const [formData, updateFormData] = useState({
        name: '',
        address: '',
        email: '',
        phone: '',
        gender: '',
        photo: '',
        department: '',
        employment_date: '',
        departure_date: '',
        wage: '',
        userID: ''
    })

    const handleChange = (e) => {
        updateFormData({
        ...formData, [e.target.name] : e.target.value 
        })
    } 

    const handleClick = (e) => {
        e.preventDefault()
        axios.post('/api/employe', formData)
        .then(response => console.log(response))
    }

    return(
        <div>
            <div>
                <label>name</label>
                <input type='text' name='name' value={formData.name}  onChange={handleChange}/>
            </div>
            <div>
                <label>address</label>
                <input type='text' name='address' value={formData.address}  onChange={handleChange}/>
            </div>
            <div>
                <label>email</label>
                <input type='text' name='email' value={formData.email}  onChange={handleChange}/>
            </div>
            <div>
                <label>phone</label>
                <input type='text' name='phone' value={formData.phone} onChange={handleChange}/>
            </div>
            <div>
                <label>gender</label>
                <input type='text' name='gender' value={formData.gender} onChange={handleChange}/>
            </div>
            <div>
                <label>photo</label>
                <input type='text' name='photo' value={formData.photo} onChange={handleChange} />
            </div>
            <div>
                <label>department</label>
                <input type='text' name='department' value={formData.department} onChange={handleChange} />
            </div>
            <div>
                <label>employment_date</label>
                <input type='text' name='employment_date' value={formData.employment_date} onChange={handleChange} />
            </div>
            <div>
                <label>departure_date</label>
                <input type='text' name='departure_date' value={formData.departure_date} onChange={handleChange} />
            </div>
            <div>
                <label>wage</label>
                <input type='text' name='wage' value={formData.wage} onChange={handleChange} />
            </div>
            <div>
                <label>userID</label>
                <input type='text' name='userID' value={formData.userID} onChange={handleChange} />
            </div>
            <div>
                <input type='submit' onClick={handleClick} />
            </div>
        </div>
    )
}

export default CreateEmployeesForm