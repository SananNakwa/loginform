import React,{useState} from "react";
export const Register = (props) => {
    const [email,setemail]=useState('');
    const [pass,setpass]=useState('');
    const [name,setname]=useState('');
    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log(email);

    }
    return (
        <div  className="form-container">
        <form className="registerform" onSubmit={handleSubmit}>
            <label>FULLNAME</label>
            <input value={name} name="name" id="name" placeholder="fullname"/>
            <label htmlfor="email">email</label>
            <input value={email} onChange={(e)=>setemail(e.target.value)} type="email" placeholder="youremail@gmail.com" id="email" name="email"/>
            <label htmlfor="password">password</label>
            <input value={pass} onChange={(e)=>setpass(e.target.value)} type="password" placeholder="*******" id="password" name="password"/>
            <button type="submit">REGISTER</button>


        </form>
        <button className="link-btn" onClick={() => props.onFormSwitch('login')}>already have an account,login here</button>
        </div>
    )
}