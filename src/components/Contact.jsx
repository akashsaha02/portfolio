import React from "react";
import { FaEnvelope, FaPhoneAlt, FaWhatsapp } from "react-icons/fa";

const ContactInformation = () => {
  return (
    <div id="contact-info" className="bg-light-background dark:bg-dark-background text-light-text dark:text-dark-text py-20">
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
            <p className="text-sm text-gray-600 dark:text-gray-300">Feel free to reach me via email at:</p>
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
      </div>
    </div>
  );
};

export default ContactInformation;
