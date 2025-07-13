import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './Login.css'; // Import the CSS file
import { FaRegEye } from "react-icons/fa"
import { FaRegEyeSlash } from "react-icons/fa";
// ... (other imports)

// ... (other imports)

function Login({ setLoginResult }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isHidden, setIsHidden] = useState(true);

  const handleShowHidePassword = (e) => {
    e.preventDefault();
    setIsHidden(!isHidden)
  }

  const handleLogin = async (e) => {
    e.preventDefault(); // Prevent default form submission

    try {
      const response = await axios.post('http://localhost:5000/login', { email, password });
      const result = response.data;

      if (result && result.success) {
        alert('Login successful');
        setLoginResult('Login successful');
        setEmail('');
        setPassword('');
      } else {
        alert('Login unsuccessful. Please check your credentials.');
      }
    } catch (error) {
      console.error('Login request error:', error);
    }
  };

  return (
    <div className="loginContainer">
      <h1>Login</h1>
      <form onSubmit={handleLogin}>
        <label>Enter Email:</label>
        <input
          type="text"
          placeholder="your email@gmail.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <div className="form-group  showhide">
        <label>Enter Password:</label>
        <input
          type={isHidden ? "password" : "text"}
          placeholder="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
         <button onClick={handleShowHidePassword}>
            {
              isHidden ? <FaRegEye /> : <FaRegEyeSlash />
            }
            </button>
        </div>
        <button type="submit">Login</button>
      </form>
      <p>
        Don't have an account? <Link to="/signup">Sign Up</Link>
      </p>
    </div>
  );
}

export default Login;
