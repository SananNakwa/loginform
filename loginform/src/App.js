import React, {useState} from "react";
import logo from './logo.svg';
import { Login } from "./Login";
import { Register } from "./Register";

import './App.css';


function App() {
  const [currentform,setcurrentform]=useState('Login');
  const toggleForm = (formName) => {
    setcurrentform(formName);
  }
  return (
    <div className="App">
      {
        currentform==="login" ? <Login onFormSwitch={toggleForm}/>:<Register onFormSwitch={toggleForm}/>
      }

    </div>
  );
}

export default App;
