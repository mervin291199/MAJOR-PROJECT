import axios from 'axios'
import React from 'react'
import FileItem from './../FileItem/FileItem'
import { Link } from 'react-router-dom'
const FileList = ({ files, removeFile }) => {
    const deleteFileHandler = (_name) => {
        axios.delete(`http://localhost:8080/upload?name=${_name}`)
            .then((res) => removeFile(_name))
            .catch((err) => console.error(err));
    }
    return (
        
    <ul className="ui file-list container ">
            <h2> UPLOAD LIST</h2>
            <Link to='/UploadFile'>
            <div className='ui button blue right'> Upload File
            </div>
            </Link>
            
            {
                files &&
                files.map(f => (<FileItem
                    key={f.name}
                    file={f}
                    deleteFile={deleteFileHandler} />))
            }
        </ul>
    )
}

export default FileList
