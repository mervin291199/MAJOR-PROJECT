import React  from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import './FileUpload.scss'
import axios from 'axios'
import { Link } from 'react-router-dom';
// class FileUpload extends React.Component{
//     state ={
        
//     }
// }

const FileUpload = ({ files, setFiles, removeFile }) => {
    const uploadHandler = (event) => {
        const file = event.target.files[0];
        if(!file) return;
        file.isUploading = false;
        setFiles([...files, file])
        //
        console.log(file)
        // upload file
        const formData = new FormData();
        formData.append(
            "newFile",
            file,
            file.name,
        )
        console.log(file)
        
        axios.post('http://localhost:8080/upload', file)
            .then((res) => {
                file.isUploading = false;
                setFiles([...files, file])
            })
            .catch((err) => {
                // inform the user
                console.error(err)
                removeFile(file.name)
            });
    }

    return (
        <> <h2 style={{ marginRight :'10px'}}>AUDIO MANAGER</h2>
            <div className="file-card">
        
            <h2 style={{marginTop:'7px'}}>Upload File</h2>
            
                <div className="file-inputs">
                    <input type="file" onChange={uploadHandler}/>
                    <button>
                        <i>
                            <FontAwesomeIcon icon={faPlus} />
                        </i>
                        Upload
                    </button>
                </div>

                <p className="main">Supports </p>
                <p className="info">MP3</p>
                
            </div>
            <Link to='/'>
            <br/>   
            <div className="ui container button blue right " > View Uploads </div>
            </Link>

            <Link to ='file:///C:/Users/cyberfox/OneDrive/Desktop/Major%20project/AVOPS/home/home.html'>
            <br/>   
            <div className="ui container button blue right " >Go back to Home page </div>
            </Link>

            
            
        </>
    )
}

export default FileUpload