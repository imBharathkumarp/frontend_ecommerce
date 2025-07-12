import React, { Fragment, useState } from "react";
import axios from 'axios';
import './Contact.css';

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
      <div className="contact-container">
        <div className="contact-form-wrapper">
          <h2 className="contact-title">Contact Us</h2>
          <p className="contact-subtitle">We'd love to hear from you!</p>
          
          <form className="contact-form" onSubmit={handlePost}>
            <div className="form-group">
              <label htmlFor="name" className="form-label">Name</label>
              <input 
                type="text" 
                id="name" 
                value={name} 
                onChange={(e) => setName(e.target.value)} 
                className="form-input"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email" className="form-label">Email</label>
              <input 
                type="email" 
                id="email" 
                value={email} 
                onChange={(e) => setEmail(e.target.value)} 
                className="form-input"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="message" className="form-label">Message</label>
              <textarea 
                id="message" 
                value={message} 
                onChange={(e) => setMessage(e.target.value)} 
                className="form-textarea"
                rows="4"
                required
              />
            </div>

            <button type="submit" className="submit-button">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </Fragment>
  );
}

export default Contact;
