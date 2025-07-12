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
      <div className="contactContainer">
        <form onSubmit={handlePost}>
          <label htmlFor="name">Name</label>
          <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} className="inputName" />

          <label htmlFor="email">Email</label>
          <input type="text" id="email" value={email} onChange={(e) => setEmail(e.target.value)} className="inputEmail" />

          <label htmlFor="message">Message</label>
          <input type="text" id="message" value={message} onChange={(e) => setMessage(e.target.value)} className="inputMessaage" />

          <button type="submit" className="submitButton">Submit</button>
        </form>
      </div>
    </Fragment>
  );
}

export default Contact;
