import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './signup.css';
import { useNavigate } from "react-router-dom"

function SignUp() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    repeatPassword: '',
    terms: false,
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
      const signup_status = await fetch("/signup/submit", {
        method: "POST",
        body: JSON.stringify(formData),
        headers: {
          'Content-Type': 'application/json'
        }
      })
      if(signup_status.status === 200){
        navigate("/login")
      }
    } catch(error){

    }
  }

  return (
    <div className="signup-container">
      <form className="signup-form" onSubmit={handleSubmit}>
        <h2>Create an Account</h2>
        <div className="input-container">
          <i className="fas fa-user"></i>
          <input
            type="text"
            placeholder="Your Name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="input-container">
          <i className="fas fa-envelope"></i>
          <input
            type="email"
            placeholder="Your Email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="input-container">
          <i className="fas fa-lock"></i>
          <input
            type="password"
            placeholder="Password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="input-container">
          <i className="fas fa-lock"></i>
          <input
            type="password"
            placeholder="Repeat Password"
            name="repeatPassword"
            value={formData.repeatPassword}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="input-container checkbox-container">
          <input
            type="checkbox"
            id="terms"
            name="terms"
            checked={formData.terms}
            onChange={handleInputChange}
            required
          />
          <label htmlFor="terms">
            I agree to the <Link to="/terms">Terms of Service</Link>
          </label>
        </div>
        <button type="submit">Register</button>
        <p>Already have an account? <Link to="/login">Sign in</Link></p>
      </form>
    </div>
  );
}

export default SignUp;
