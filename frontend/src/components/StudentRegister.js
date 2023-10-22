import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
const StudentRegister=()=>{
     const [fullname,setFullname]=useState("");
     const [username,setUsername]=useState("");
     const [email,setEmail]=useState("");
     const [password,setPassword]=useState("");
     const [mobile,setMobile]=useState("");
     const [dob,setDob]=useState("");
     const  navigate = useNavigate();
  useEffect(()=>{
      const auth = localStorage.getItem('s-user');
      if(auth){
        navigate('/registered')
      }
  })
     const collectData = async () => {
        console.warn(username, email, password);
        if(!fullname || !username || !email || !password || !mobile || !dob){
            alert("Please fill all the fields")
            return false;
        }
       
        let result = await fetch("http://localhost:5000/register/student", {
          method: "post",
          body: JSON.stringify({fullname, username, email, password,mobile,dob }),
          headers: {
            "Content-Type": "application/json",
          },
        });
        result = await result.json();
        console.warn(result);
        localStorage.setItem("s-user",JSON.stringify(result.result))
        localStorage.setItem("s-token",JSON.stringify(result.auth))
        navigate('/registered')
        
      };


    return(
        
        <div className="srwrapper">
            <div className="header">
                <h1>Register as Student</h1>
            </div>
            <form>
                <div className="input-box">
                    <label htmlFor="fullName"></label>
                    <input type="text" id="fullName" name="fullName" required
                    value={fullname} onChange={(e) => setFullname(e.target.value)}
                    placeholder="Enter Name"/>
                </div>
                <div className="input-box">
                <label htmlFor="username"></label>
                <input type="text" id="username" name="username" required
                 value={username} onChange={(e) => setUsername(e.target.value)}
                 placeholder="Enter Username"/>
            </div>
            <div className="input-box">
                    <label htmlFor="email"></label>
                    <input type="email" id="email" name="email" required
                     value={email} onChange={(e) => setEmail(e.target.value)}
                     placeholder="Enter Email"/>
                </div>
                <div className="input-box">
                    <label htmlFor="password"></label>
                    <input type="password" id="password" name="password" required
                     value={password} onChange={(e) => setPassword(e.target.value)}
                     placeholder="Enter Password"/>
                </div>
                <div className="input-box">
                <label htmlFor="mobileNumber"></label>
                <input type="tel" id="mobileNumber" name="mobileNumber" required
                 value={mobile} onChange={(e) => setMobile(e.target.value)}
                 placeholder="Enter Number"/>
            </div>
                <div className="input-box">
                <label htmlFor="dateOfBirth"></label>
                <input type="date" id="dateOfBirth" name="dateOfBirth" required
                 value={dob} onChange={(e) => setDob(e.target.value)}/>
            </div>
                <button onClick={collectData}className="btn" type="submit">Register</button>
            </form>
            <p><br/></p>
            <p>Already Registered?</p>
            <a className="btnn" href="/login">Login</a>
        </div>

    
    )
}

export default StudentRegister;