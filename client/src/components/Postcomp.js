import React, {useState} from 'react'
const Postcomp = () => {
    const [image, setImage] = useState("");
    const [url, setUrl] = useState("");
    const uploadImage = () => {
        const data = new FormData()
        data.append("file", image)
        data.append("upload_preset", "employe image")
        data.append("cloud_name", "dtshe5gsz")
        fetch("  https://api.cloudinary.com/v1_1/dtshe5gsz/image/upload", {
            method: "post",
            body: data
        }).then(resp => resp.json()).then(data => {
            setUrl(data.url)
        }).catch(err => console.log(err))
    }
    return (
                    <div className="col-span-6 sm:col-span-6">
                        <label className="w-64 flex flex-col items-center px-4 py-6 bg-white rounded-md shadow-md tracking-wide uppercase border border-blue cursor-pointer hover:bg-purple-600 hover:text-white text-purple-600 ease-linear transition-all duration-150">
                          <i className="fas fa-cloud-upload-alt fa-3x"></i>
                          <span className="mt-2 text-base leading-normal">Select a file</span>
                          <input type='file'  multiple={false} className="hidden" name="photo" onChange={(e) => setImage(e.target.files[0]) } />
                          <img alt='employe' src={url} />
                        </label>
                        <button onClick={uploadImage}>Upload</button>
                      </div>
        // <div>
        //     <div>
        //         <input type="file" onChange= {(e)=> setImage(e.target.files[0])}></input>
        //         <button onClick={uploadImage}>Upload</button>
        //     </div>
        //     <div>
        //         <h1>Uploaded image will be displayed here</h1>
        //         <img alt='some-pic' src={url}/>
        //     </div>
        // </div>
    )
}
export default Postcomp;
