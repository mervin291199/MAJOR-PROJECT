import { useState ,useEffect } from 'react'
import './App.scss';
import FileUpload from './FileUpload/FileUpload';
import FileList from './FileList/FileList';
import Header from './Header';
import {BrowserRouter as  Router, Switch, Route} from 'react-router-dom';

function App() {

  const LOCAL_STORAGE_KEY = "files";
  const [files, setFiles] = useState([])

  const removeFile = (filename) => {
    setFiles(files.filter(file => file.name !== filename))
  }
  
     useEffect(() =>{
     const retrieveFiles = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
     if (retrieveFiles) setFiles(retrieveFiles)
   }, []);

  useEffect(() =>{
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(files))
  }, [files]);
  return (

    <div className="App">
     <Router>
        <Header />
         <Switch>
         
          <Route path='/UploadFile'
           render={(props) => (
           <FileUpload 
           {...props}
           files={files}
            setFiles={setFiles}
            removeFile={removeFile}
            />
           )}
            />
          <Route path='/' 
           exact
           render={
             (props) => 
             (<FileList
                {...props}
                 files={files}
                  removeFile={removeFile} 
              />)
           }
          
           />
        </Switch>
      {/* <FileUpload files={files} setFiles={setFiles}
        removeFile={removeFile} />
      <FileList files={files} removeFile={removeFile} /> */}
      </Router>
   
    </div>

  );
}

export default App;
