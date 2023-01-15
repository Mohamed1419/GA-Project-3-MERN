import React, { useState } from 'react'
import Axios from "axios"
import { uploadAnImage } from '../../utils/blogService'

function TestImage() {
    const [image, setImage] = useState("")

    const uploadImage = () => {
        const formData = new FormData()
        formData.append("file", image)
        formData.append("upload_preset", "xw7vo9bm");
        
        uploadAnImage(formData)
    }

  return (
    <div>
        <input type="file" onChange={(e) => setImage(e.target.files[0])} />
        <button type='submit' onClick={uploadImage}>Submit</button>
    </div>
  )
}

export default TestImage