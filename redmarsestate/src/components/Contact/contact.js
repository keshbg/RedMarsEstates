import React, { useState } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [errors, setErrors] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({
      ...formData,
      [id]: value
    });
  };

  const validateForm = () => {
    let valid = true;
    let errors = {};

    // Check if all fields are filled
    if (!formData.name) {
      errors.name = 'Name is required';
      valid = false;
    }
    if (!formData.email) {
      errors.email = 'Email is required';
      valid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = 'Email address is invalid';
      valid = false;
    }
    if (!formData.phone) {
      errors.phone = 'Phone number is required';
      valid = false;
    } else if (!/^\+?\d{10,15}$/.test(formData.phone)) {
      errors.phone = 'Phone number is invalid';
      valid = false;
    }
    if (!formData.message) {
      errors.message = 'Message is required';
      valid = false;
    }

    setErrors(errors);
    return valid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      emailjs.send(
        'service_cr7ct8g',
        'template_3m650by',
        formData,
        '25wmT4VmyyE_Sbv6g'
      )
      .then((result) => {
        console.log('Email sent successfully:', result.text);
        alert('Message sent successfully!');
        setFormData({
          name: '',
          email: '',
          phone: '',
          message: ''
        });
        setErrors({
          name: '',
          email: '',
          phone: '',
          message: ''
        });
      }, (error) => {
        console.log('Email sending failed:', error.text);
        alert('Failed to send message. Please try again later.');
      });
    }
  };

  return (
    <main className="container mx-auto p-4">
      <div className="flex flex-col md:flex-row bg-white shadow-md rounded-lg overflow-hidden">
        {/* Office Information */}
        <div className="md:w-1/2 p-4 bg-gray-100">
          <h2 className="text-2xl font-bold mb-4">Office Information</h2>
            <p className='mb-4 text-xl'><span role="img" aria-label="address">Address📍 :</span> Aldershot, UK</p>
            <p className='mb-4 text-xl'><span role="img" aria-label="mobile">Phone 📱 :</span> +447919492312</p>
            <p className='mb-8 text-xl'><span role="img" aria-label="email">Email 📧 :</span> info@redmarsestates.co.uk</p>
          <div className="w-full md:w-1/3 mb-4 md:mb-0 ">
            <h3 className="font-bold text-lg mb-2">Opening Hours</h3>
            <p className='mb-4 text-xl'>Mon - Fri: 9am to 6pm</p>
            <p className='mb-4 text-xl'>Sat: 10am to 4pm</p>
            <p className='text-xl'>Sun: Closed</p>
          </div>
        </div>

        {/* Contact Form */}
        <div className="md:w-1/2 p-4">
          <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={handleChange}
                className={`mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none ${errors.name ? 'border-red-500' : 'border-gray-300'} focus:ring-indigo-500 focus:border-indigo-500`}
              />
              {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                className={`mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none ${errors.email ? 'border-red-500' : 'border-gray-300'} focus:ring-indigo-500 focus:border-indigo-500`}
              />
              {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
            </div>
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone Number</label>
              <input
                type="tel"
                id="phone"
                value={formData.phone}
                onChange={handleChange}
                className={`mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none ${errors.phone ? 'border-red-500' : 'border-gray-300'} focus:ring-indigo-500 focus:border-indigo-500`}
              />
              {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
              <textarea
                id="message"
                rows="4"
                value={formData.message}
                onChange={handleChange}
                className={`mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none ${errors.message ? 'border-red-500' : 'border-gray-300'} focus:ring-indigo-500 focus:border-indigo-500`}
              ></textarea>
              {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}
            </div>
            <div>
              <button
                type="submit"
                className="w-full py-2 px-4 bg-blue-600 text-white font-semibold rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
};

export default Contact;