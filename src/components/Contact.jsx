import React, { useState } from "react";
import { FaEnvelope, FaPhoneAlt, FaWhatsapp } from "react-icons/fa";
import emailjs from "emailjs-com";

const ContactInformation = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [statusMessage, setStatusMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .send(
        "your_service_id", // Replace with your EmailJS service ID
        "your_template_id", // Replace with your EmailJS template ID
        formData,
        "your_user_id" // Replace with your EmailJS user ID
      )
      .then(
        (response) => {
          setStatusMessage("Message sent successfully!");
          setFormData({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setStatusMessage("Error sending message. Please try again.");
        }
      );
  };

  return (
    <div
      id="contact-info"
      className="bg-light-background dark:bg-dark-background text-light-text dark:text-dark-text py-20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-primary dark:text-dark-primary mb-10">
          Contact Information
        </h2>

        {/* Contact Details */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {/* Email Contact */}
          <div className="p-6 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-md hover:shadow-xl transition">
            <div className="flex items-center mb-4">
              <FaEnvelope size={24} className="text-indigo-600 dark:text-indigo-400 mr-4" />
              <h4 className="text-lg font-semibold text-indigo-600 dark:text-indigo-400">Email</h4>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              Feel free to reach me via email at:
            </p>
            <a href="mailto:akash.saha@example.com" className="text-indigo-600 dark:text-indigo-400 hover:underline">
              akash.saha@example.com
            </a>
          </div>

          {/* Phone Contact */}
          <div className="p-6 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-md hover:shadow-xl transition">
            <div className="flex items-center mb-4">
              <FaPhoneAlt size={24} className="text-indigo-600 dark:text-indigo-400 mr-4" />
              <h4 className="text-lg font-semibold text-indigo-600 dark:text-indigo-400">Phone</h4>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-300">You can also call me at:</p>
            <a href="tel:+1234567890" className="text-indigo-600 dark:text-indigo-400 hover:underline">
              +1 (234) 567-890
            </a>
          </div>

          {/* WhatsApp Contact */}
          <div className="p-6 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-md hover:shadow-xl transition">
            <div className="flex items-center mb-4">
              <FaWhatsapp size={24} className="text-indigo-600 dark:text-indigo-400 mr-4" />
              <h4 className="text-lg font-semibold text-indigo-600 dark:text-indigo-400">WhatsApp</h4>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-300">You can also reach me on WhatsApp:</p>
            <a href="https://wa.me/1234567890" className="text-indigo-600 dark:text-indigo-400 hover:underline">
              +1 (234) 567-890
            </a>
          </div>
        </div>

        {/* Contact Form */}
        <div className="mt-12">
          <h3 className="text-xl font-semibold text-center text-indigo-600 dark:text-indigo-400 mb-4">
            Or Send Me a Message
          </h3>
          {statusMessage && (
            <p className="text-center text-green-500 dark:text-green-300 mb-4">{statusMessage}</p>
          )}
          <form onSubmit={handleSubmit} className="max-w-lg mx-auto space-y-6">
            <div>
              <label htmlFor="name" className="block text-lg font-semibold dark:text-gray-200">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full p-3 mt-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-lg font-semibold dark:text-gray-200">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full p-3 mt-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-lg font-semibold dark:text-gray-200">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="4"
                className="w-full p-3 mt-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-indigo-600 text-white py-3 rounded-md hover:bg-indigo-700 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactInformation;
