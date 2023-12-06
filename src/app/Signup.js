// client-> src -> components -> signup.js
import React, { useState } from 'react';
import axios from 'axios';
import './Signup.css'; // Import the CSS file

function Signup({ setIsLogin, setLoginResult }) {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [dob, setDob] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");

  const handleSignup = () => {
    axios.post('http://localhost:5000/register', { fname, lname, dob, email, password, phone })
      .then((response) => {
        const result = response.data;
        if (result) {
          alert("Data saved successfully");
          setLoginResult("Signup successful");
          setFname("");
          setLname("");
          setDob("");
          setEmail("");
          setPassword("");
          setPhone("");
        }
      })
      .catch((error) => {
        console.error("Signup request error:", error);
        alert(`${error}`);
      });
  }

  return (
    <div className="signup-container">
      <h1>Sign Up</h1>
      <form>
        <div className="form-group">
          <label>First Name:</label>
          <input
            type="text"
            placeholder="Enter your first name"
            value={fname}
            onChange={(e) => setFname(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Last Name:</label>
          <input
            type="text"
            placeholder="Enter your last name"
            value={lname}
            onChange={(e) => setLname(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Date of Birth:</label>
          <input
            type="text"
            placeholder="Enter your date of birth"
            value={dob}
            onChange={(e) => setDob(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Email:</label>
          <input
            type="text"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Password:</label>
          <input
            type="text"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Phone Number:</label>
          <input
            type="text"
            placeholder="Enter your phone number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>
        <button type="button" onClick={handleSignup}>
          Sign Up
        </button>
      </form>
    </div>
  );
}

export default Signup;
