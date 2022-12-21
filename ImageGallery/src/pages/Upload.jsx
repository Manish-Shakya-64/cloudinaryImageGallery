import React, { useState } from "react";
import "./style.css";
import axios from 'axios';


const Upload = () => {
  const [file, setFile] = useState("");
  // const [selectedFile,setSelectedFile] = useState('');
  const [preViewFile, setPreViewFile] = useState("");

  const handleFileInput = (e) => {
    const file = e.target.files[0];
    previewFile(file);
    // setFile(file);
  };

  const previewFile = (file) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setPreViewFile(reader.result);
    };
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    if(!preViewFile) return;
    uploadImage(preViewFile);
    }

    const uploadImage = async (image) => {
      console.log(image);
      try {
        
        // await fetch('/api/upload',
        // {
        //   method : 'POST',
        //   body : JSON.stringify({data:image}),
        //   headers:{'Content-type':'application/json'}
        // })
       await axios.post('http://localhost:5000/api/upload',{data:image}).then((res)=>{
          console.log(res)
        }).catch((error)=>{
          console.log("error::::---> ",error)
        });

      } catch (error) {
        
      }
    }

  return (
    <>
      <div className="upload">
        <div>
          <form className="containerupload" onSubmit={handleSubmit}>
            <div className="inputUpload">
              <input
                type="file"
                name="image"
                onChange={handleFileInput}
                value={file}
              />
            </div>
            {previewFile && (
              <div className="preView">
                <img src={preViewFile} alt="preview" />
              </div>
            )}
            <button type="submit" className="btn">
              Upload
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Upload;
