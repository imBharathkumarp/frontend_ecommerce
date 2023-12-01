import React, { Fragment, useState } from "react";
import axios from 'axios';

function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handlePost = (e) => {
    e.preventDefault();

    axios.post('http://localhost:8080/data', { name, email, message })
      .then((response) => {
        const result = response.data;
        if (result) {
          alert("Data saved successfully");
          setEmail("");
          setName("");
          setMessage('');
        }
      })
      .catch((error) => {
        console.error("POST request error:", error);
        alert("Something went wrong when saving data.");
      });
  }

  return (
    <Fragment>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', background: '#f0f0f0' }}>
        <form style={{ backgroundColor: '#fff', padding: '20px', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }} onSubmit={handlePost}>
          <label htmlFor="name">Name</label>
          <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} style={{ width: '100%', marginBottom: '10px', padding: '8px' }} />

          <label htmlFor="email">Email</label>
          <input type="text" id="email" value={email} onChange={(e) => setEmail(e.target.value)} style={{ width: '100%', marginBottom: '10px', padding: '8px' }} />

          <label htmlFor="message">Message</label>
          <input type="text" id="message" value={message} onChange={(e) => setMessage(e.target.value)} style={{ width: '100%', marginBottom: '20px', padding: '8px' }} />

          <button type="submit" style={{ backgroundColor: '#007bff', color: '#fff', padding: '10px', borderRadius: '4px', cursor: 'pointer' }}>Submit</button>
        </form>
      </div>
    </Fragment>
  );
}

export default Contact;
