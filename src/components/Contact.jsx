import React, { useState , useRef} from 'react';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
import ContactImage from '../assets/hero1.jpg'

const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    if (!name) {
      newErrors.name = 'Name is required';
    }
    if (!email) {
      newErrors.email = 'Email is required';
    }
    if (!message) {
      newErrors.message = 'Message is required';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  
  

  const handleSubmit = (event) => {
    event.preventDefault();
    // Send form data to server or API here
    // Reset form fields after submission
    if (validateForm()) {
    // Send form data to server or API here
    // Reset form fields after submission
    setName('');
    setEmail('');
    setMessage('');
  }
  };

  return (
    <div className='bg-gray-100 py-14'>
        <div className="flex items-center justify-center p-4 rounded-2xl shadow-5xl border max-w-[1100px] mx-auto  bg-white">
    <div className="w-1/3">
      <img
        src={ContactImage}
        alt="Your Image"
        className="w-full rounded-2xl"
      />
    </div>
    <div className="w-2/3 px-4 bg-white ">
      <h1 className="text-3xl block text-center font-semibold">
        Contact Us
      </h1>
      <hr className="my-3 border-gray-400" />
  
      <form onSubmit={handleSubmit}>
        <label htmlFor="name" className="font-medium mb-2 flex">
          Name {errors.name && <span className="text-red-500">*</span>}
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={name}
          placeholder="Enter your name"
          onChange={(event) => setName(event.target.value)}
          className="w-full input-black border rounded-md bg-transparent border-gray-500 p-3 mb-3"
        />
        {errors.name && <p className="text-red-500">{errors.name}</p>}
  
        <label htmlFor="email" className="font-medium mb-2 flex">
          Email {errors.email && <span className="text-red-500">*</span>}
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={email}
          placeholder="Enter your email"
          onChange={(event) => setEmail(event.target.value)}
          className="w-full input-black border rounded-md bg-transparent border-gray-500 p-3 mb-3"
        />
        {errors.email && <p className="text-red-500">{errors.email}</p>}
  
        <label htmlFor="message" className="font-medium mb-2 flex">
          Message {errors.message && <span className="text-red-500">*</span>}
        </label>
        <textarea
          id="message"
          name="message"
          rows="5"
          placeholder="Enter your message"
          value={message}
          onChange={(event) => setMessage(event.target.value)}
          className="w-full input-black border rounded-md bg-transparent border-gray-500 p-3 mb-3"
        ></textarea>
        {errors.message && <p className="text-red-500">{errors.message}</p>}
  
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
