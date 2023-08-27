import React,{useState} from "react";

export const Login = (props) => {
    const [email,setemail]=useState('');
    const [pass,setpass]=useState('');

    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log(email);

    }

    return (
        <div  className="form-container">
        <form className="loginform" onSubmit={handleSubmit}>
            <label htmlfor="email">email</label>
            <input value={email} onChange={(e)=>setemail(e.target.value)} type="email" placeholder="youremail@gmail.com" id="email" name="email"/>
            <label htmlfor="password">password</label>
            <input value={pass} onChange={(e)=>setpass(e.target.value)} type="password" placeholder="*******" id="password" name="password"/>
            <button type="submit">LOGIN</button>


        </form>
        <button className="link-btn" onClick={() => props.onFormSwitch('register')}>Dont have an account register here</button>
        </div>
    )
}