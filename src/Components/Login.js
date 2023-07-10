import React, { useState, useEffect } from 'react';
import "./Styles/Login.css";
import { useNavigate, Link, Navigate } from 'react-router-dom';
import Sciflare from "../Image/Sciflare.jpg";

function Login() {

  const navigate = useNavigate();


  const [Input, setInput] = useState({
    Email: "",
    Password: "",
  })


  const[Error, setError]=useState('')

  //const [loggedIn, setLoggedIn] = useState(false);

  // console.log("Log", loggedIn);

  const Change = (e) => {
    setInput({ ...Input, [e.target.name]: e.target.value })
  }

  const submit = (e) => {
    e.preventDefault();
  
    const storedData = localStorage.getItem('Data');
    const formData = storedData ? JSON.parse(storedData) : null;
    console.log("Data", formData);
  
    if (formData && Input && Input.Email === formData.Email && Input.Password === formData.Password) {
      // login successful
      console.log("True");
      //setLoggedIn(true);
  
      navigate("/todo");
  
      console.log("Login Successful");
    } else {
      console.log("Login Failed");
      setError("User does not exist, please sign up");
    }
  };
  return (
    <div>
      <div className="main">

        <div className="submain">

          <div>
            <img src={Sciflare} height={70} style={{borderRadius:"10px"}}/>
          </div>
          <div className='mt-4'>
          <h6 style={{fontSize:"15px"}}>Don't have an Account?<Link to="/register"> Sign Up</Link></h6>
          </div>

          <div style={{ marginBottom: "20px", marginTop: "20px" }}>
            <h2>Login</h2>
          </div>
          {Error && <div style={{color:"red",marginBottom: "10px",}}>{Error}</div>}
          <div>
            <input className="input" type="text" name="Email" placeholder="Email" value={Input.Email} onChange={Change} />
          </div>
          <div>
            <input className="input" type="Password" name="Password" placeholder="Password" value={Input.Password} onChange={Change} />
          </div>
          <div>
            <button className="button" onClick={submit}>Submit</button>
          </div>
          <div className="footer1">

            

          </div>


        </div>


      </div>

    </div>
  )
}

export default Login