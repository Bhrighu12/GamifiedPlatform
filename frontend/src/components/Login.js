import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
const Login=()=>{
    const navigate = useNavigate();
    const[username,setUsername]= React.useState('');
    const[password,setPassword]= React.useState('');
    const handleLogin=async()=>{
        console.warn(username , password)
        let result = await fetch('http://localhost:5000/login' , {
            method: "post",
            body: JSON.stringify({username,password }),
            headers: {
              "Content-Type": "application/json",
            },
          });
          result = await result.json();
          console.warn(result);
        if(result.auth){
            localStorage.setItem("l-user",JSON.stringify(result.user));
            localStorage.setItem("token",JSON.stringify(result.auth));
            navigate("/learn");

        }else{
            alert("Enter Correct Details")
        }

    }
    return(
        <div className="wrapper">
            <link
        href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css"
        rel="stylesheet"
      />
        <h1>Login</h1>
        <div className="input-box">
          <input type="text" placeholder="Username" required 
          onChange={(e)=>setUsername(e.target.value)} value={username}/>
          <i className="bx bxs-user"></i>
        </div>
        <div className="input-box">
          <input type="password" placeholder="password" id="pass" required 
          onChange={(e)=>setPassword(e.target.value)} value={password}/>
          <i className="bx bxs-lock-alt"></i>
        </div>
        {/* <div className="remember-forget">
          <label><input type="checkbox" />Remember me </label>
          <a href="#">Forget password?</a>
        </div> */}
        <button onClick={handleLogin} type="submit" className="btn">Login</button>
        <div className="Register-link">
          <p>Don't have an account ? <a href="/register">Register</a></p>
        </div>
        </div>
    )
}

export default Login;