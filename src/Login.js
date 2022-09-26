import axios from 'axios';  
import {
    useNavigate 
  } from "react-router-dom";

import React, { useState } from 'react'  


const Login=()=>{
    let navigate = useNavigate();

    const [user,setUser]=useState({username:'',password:''})

    const handleChange=(e)=>{
        setUser({...user, [e.target.name]: e.target.value}); 
    }
    const url = "http://localhost/sgp-sem5/login.php";

    const submitForm=(e)=>{
        e.preventDefault(); 
       const sendData = {
        
            username:user.username,
            password:user.password

        }

       // console.log(sendData);

        axios.post(url,sendData)
        .then((result)=>{
            if (result.data.Status === '200') { 
                window.localStorage.setItem('username', result.data.username);
                navigate(`/take_attendance`);
            }
        else  {
           //props.history.push('/Dashboard')  
           //props.history.push('/Dashboard') Redirect
           
           alert('Invalid User'); 
        }
      })  
    }


    return(
        <form onSubmit={submitForm}>
        <div className="main-box">
        <div className="row">
             <div className="col-md-12 text-center"> <h1>Login Page</h1></div>
        </div>
        <div className="row">
           <div className="col-md-6">Username:</div>
           <div className="col-md-6"><input type="text" name="username"  
           onChange={handleChange} value={user.username} /></div>
        </div>
        <div className="row">
           <div className="col-md-6">Password:</div>
           <div className="col-md-6"><input type="password" name="password"
            onChange={handleChange} value={user.password}
            /></div>
        </div>


        <div className="row">
           <div className="col-md-12 text-center">
               <input type="submit" name="submit"  className="btn btn-success" value="Plese Login" />
           </div>
           
        </div>
        </div>
        </form>
    )
}

export default Login;