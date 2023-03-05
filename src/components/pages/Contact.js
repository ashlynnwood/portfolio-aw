import React, { useState } from 'react';
import { validateEmail } from '../../utils/helpers';
import '../../styles/Contact.css';
import github from '../../assets/github.png'
import linkedIn from '../../assets/linkedin.png'


function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (e) => {
    // Getting the value and name of the input which triggered the change
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    // Set state of email, username, or password based on input
    if (inputType === 'email') {
      setEmail(inputValue);
    } else if (inputType === 'name') {
      setName(inputValue);
    } else {
      setMessage(inputValue);
    }
  };

  const handleFormSubmit = (e) => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    e.preventDefault();

    // Check if email is valid, if name is empty
    if (!validateEmail(email) || !name) {
      setErrorMessage('Email or name is invalid');
      return;
    }
    // Check to see if message entered
    if (!message) {
      setErrorMessage('Please enter a message');
      return;
    }
    
    alert(`Thanks for your email ${name}!`);

    // Clear out the input after a successful message sent
    setName('');
    setMessage('');
    setEmail('');
  };
  
  
  return (
    <div className="section-container">
      <h1>Interested in working together?</h1>
      <h2>Contact me!</h2>
      <div className='contact-form-container'>
      <form className="contact-form">
        <input className='input-box email-input'
          value={email}
          name="email"
          onChange={handleInputChange}
          type="email"
          placeholder="Email"
        />
        <input className='input-box email-input'
          value={name}
          name="name"
          onChange={handleInputChange}
          type="text"
          placeholder="Name"
        />
        <textarea className='input-box body-input'
          value={message}
          name="message"
          onChange={handleInputChange}
          type="text"
          placeholder="Message"
        ></textarea>
        <button type="button" className="contact-btn" onClick={handleFormSubmit}>Send Email</button>
      </form>
      {errorMessage && (
        <div>
          <p className="error-text">{errorMessage}</p>
        </div>
      )}
      </div>
      <div className='social-icons-container'>
        <a href="https://github.com/ashlynnwood"
          className='social-icon'
          target="_blank" rel="noreferrer">
          <img src={github} alt='github icon'/>
        </a>
        <a href="https://www.linkedin.com/in/ashlynn-wood-b15b75258/"
          className='social-icon'
          target="_blank" rel="noreferrer">
          <img src={linkedIn} alt='linkedin icon'/>
        </a>
      </div>
    </div>
  );
}


export default Contact;