import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './login.css';
import { useNavigate } from "react-router-dom"

function Login() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    remember_user: false
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    const newValue = type === 'checkbox' ? checked : value;
    setFormData({
      ...formData,
      [name]: newValue,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try{
      const login_status = await fetch("/auth/login", {
        method: "POST",
        body: JSON.stringify(formData),
        headers: {
          'Content-Type': 'application/json'
        }
      })
      console.log(login_status)
      if(login_status.status === 200){
        navigate("/")
      }
    } catch(error){

    }
  }
  return (
    <div className="login-container">
      <h2>Login to Your Account</h2>
      <p>Sign in to your account.</p>
      <form name="login" onSubmit={handleSubmit}>
        <div className="input-container">
          <input name="email" type="email" placeholder="Your Email" onChange={handleInputChange}/>
        </div>
        <div className="input-container">
          <input name="password" type="password" placeholder="Password" onChange={handleInputChange}/>
        </div>
        <div className="checkbox-container">
          <label htmlFor="rememberMe">
            <input name="remember_user" type="checkbox" id="rememberMe" onChange={handleInputChange}/>
            Remember me
          </label>
        </div>
        <button className="login-button" type="submit">
          Sign in
        </button>
      </form>
      <div className="forgot-password">
        <Link to="#">Forgot Password?</Link>
      </div>
      <div className="signup-text">
        <label>Don't have an account? </label>
        <Link to="/signup">Sign up</Link>
      </div>
    </div>
  );
}

export default Login;
