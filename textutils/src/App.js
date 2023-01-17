// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import Alert from './components/Alert';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

// let name = "Pooja Pal"; //variable name is used inside jsx as curly bracket
function App() {
  const [mode, setmode] =  useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message,type) => {
    setAlert({
      msg: message,
      type:type
    })
    setTimeout( () => {
      setAlert(null);
    },1500);

  }

  const toggelMode = () => {
    if(mode === 'light'){
      setmode('dark');
      document.body.style.backgroundColor='#585454';
      showAlert("dark mode enabled","success");
      document.title = 'TextUtils-Dark Mode'
    }
    else{
      setmode('light');
      document.body.style.backgroundColor='white';
      showAlert("Light mode enabled","success");
      document.title = 'TextUtils-Light Mode'
    }
  }
  return (
<>
<BrowserRouter>    
<Navbar title = "TextUtils" mode = {mode} toggelMode={toggelMode} abouttext="About Textutils"/>
{/* <Navbar/> */}
<Alert alert={alert}/>
<div className="container my-100">
<Routes>
          <Route exact path='/about' element={<About/>} />
          <Route exact path='/' element={<Textform showAlert = {showAlert} heading = "Enter the text to analyze" mode = {mode}/>} />
 </Routes>
</div>
</BrowserRouter>    
</>
  );
}

export default App;

