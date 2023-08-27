import React, {useState} from "react";
import logo from './logo.svg';
import './App.css';
import { Login } from "./Login";
import { Register } from "./Register";

function App() {
  const [currentform,setcurrentform]=useState('login');
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
