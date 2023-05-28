
import './App.css';
import Navbar from './components/Navbar';
import MainForm from './components/MainForm';
import { useState } from 'react';
import Alert from './components/Alert';
/* import About from './components/About'; */
/* import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom"; */


function App() {
  
const [mode, setMode]=useState("light"); //enables dark mode
const [alert, setAlert]=useState(null); //alert messages

let showAlert=(msg, type)=>{
  setAlert({
    msg: msg,
    type: type
  })
  setTimeout(() => {
    setAlert(null);
  }, 3000);
}

let toggleMode=()=>{
  if(mode==='light' || '#50C878' || 'F1F1F1' || '#A24A4A' || '#F47054'){
    setMode('dark');
    document.body.style.backgroundColor='#003366' 
    showAlert('Enabled dark mode', 'success');
  }
  else{
    setMode('light');
    document.body.style.backgroundColor='white'
    
  }
}

let norMode=()=>{
  if(mode==='light' || '#003366' || '#50C878' || '#A24A4A' || '#F47054'){
    setMode('light');
    document.body.style.backgroundColor='white' 
    showAlert('Enabled light mode', 'success');
  }
  else{
    setMode('light');
    document.body.style.backgroundColor='white'
    
  }
}

const greenMode=()=>{
  if(mode==='light' || '#50C878' || '#003366' || '#A24A4A' || '#F47054'){
    setMode('dark');
    document.body.style.backgroundColor='#50C878'
    showAlert('Enabled green mode', 'success');
  }
  else{
    setMode('light');
    document.body.style.backgroundColor='white'
    
  }
}

const redMode=()=>{
  if(mode==='light' || '#50C878' || '#003366' || '#A24A4A'){
    setMode('dark');
    document.body.style.backgroundColor='#F47054'
    showAlert('Enabled red mode', 'success');
  }
  else{
    setMode('light');
    document.body.style.backgroundColor='white'
    
  }
}

const brownMode=()=>{
  if(mode==='light' || '#50C878' || '#003366' || '#F47054'){
    setMode('dark');
    document.body.style.backgroundColor='#A24A4A'
    showAlert('Enabled brown mode', 'success');
  }
  else{
    setMode('light');
    document.body.style.backgroundColor='white'
    
  }
}


  return (
    <>
    {/* <Router> */}
    
    
    <Navbar title="Text" mode={mode} norMode={norMode} greenMode={greenMode} redMode={redMode} brownMode={brownMode} toggleMode={toggleMode} showAlert={showAlert} setMode={setMode} />
    <Alert alert={alert}/>
    <MainForm showAlert={showAlert} text="Add your text here" mode={mode}/>
    
    {/* <Routes>
          <Route exact path="/about" element={<About mode={mode}/>}>
            
          </Route>
          
          <Route exact path="/" element={<MainForm showAlert={showAlert} text="Add your text here" mode={mode}/>} >
          </Route>
        </Routes>
          
        </Router> */}

</> 
   
  );
}



export default App;
