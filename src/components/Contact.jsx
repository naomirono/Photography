import React, { useState } from 'react';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
import ContactImage from '../assets/hero1.jpg'

const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [nameError, setNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [messageError, setMessageError] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    // Validate form data here
    if (name === '') {
      setNameError(true);
    } else {
      setNameError(false);
    }
    if (email === '') {
      setEmailError(true);
    } else {
      setEmailError(false);
    }
    if (message === '') {
      setMessageError(true);
    } else {
      setMessageError(false);
    }
    // If form data is valid, send to server or API here
    // Reset form fields after submission
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <div className='bg-gray-100 py-14 mt-20 h-[89vh]'>
        <div className="flex items-center justify-center p-4 rounded-2xl shadow-5xl border max-w-[1100px] mx-auto bg-white">
        <div className="w-1/3 md:block hidden">
  <img
    src='https://myretrobucket.s3.eu-north-1.amazonaws.com/hero1.JPG'
    alt="Your Image"
    className="w-full rounded-2xl"
  />
</div>
    <div className="w-full md:w-2/3 lg:w-2/3 px-4 bg-white ">
      <h1 className="text-3xl block text-center font-semibold">
        Contact Us
      </h1>
      <hr className="my-3 border-gray-400" />
  
      <form onSubmit={handleSubmit}>
        <label htmlFor="name" className="font-medium mb-2 flex">
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={name}
          placeholder="Enter your name"
          onChange={(event) => {
            setName(event.target.value);
            if (event.target.value === '') {
              setNameError(true);
            } else {
              setNameError(false);
            }
          }}
          className="w-full input-black border rounded-md bg-transparent border-gray-500 p-3 mb-3"
        />
        {nameError && (
          <p className="text-red-500 text-sm mb-3">Please enter your name</p>
        )}
  
        <label htmlFor="email" className="font-medium mb-2 flex">
          Email 
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={email}
          placeholder="Enter your email"
          onChange={(event) => {
            setEmail(event.target.value);
            if (event.target.value === '') {
              setEmailError(true);
            } else {
              setEmailError(false);
            }
          }}
          className="w-full input-black border rounded-md bg-transparent border-gray-500 p-3 mb-3"
        />
        {emailError && (
          <p className="text-red-500 text-sm mb-3">Please enter a valid email address</p>
        )}
  
        <label htmlFor="message" className="font-medium mb-2 flex">
          Message 
        </label>
        <textarea
          id="message"
          name="message"
          rows="5"
          placeholder="Enter your message"
          value={message}
          onChange={(event) => {
            setMessage(event.target.value);
            if (event.target.value === '') {
              setMessageError(true);
            } else {
              setMessageError(false);
            }
          }}
          className="w-full input-black border rounded-md bg-transparent border-gray-500 p-3 mb-3"
        ></textarea>
        {messageError && (
          <p className="text-red-500 text-sm mb-3">Please enter a message</p>
        )}
  
        <button
          className="block bg-blue-700 hover:bg-blue-800 text-white w-full py-2 px rounded mt-4"
          type="submit"
        >
          Send Message
        </button>
      </form>
      <div className="flex justify-center items-center mt-10">
        <a href="https://www.facebook.com/">
          <FaFacebook className="text-blue-700 mx-3" size={24} />
        </a>
        <a href="https://www.instagram.com/">
          <FaInstagram className="text-pink-500 mx-3" size={24} />
        </a>
        <a href="https://twitter.com/">
          <FaTwitter className="text-blue-500 mx-3" size={24} />
        </a>
      </div>
    </div>
  </div>
    </div>
  
  );
};

export default ContactForm;
