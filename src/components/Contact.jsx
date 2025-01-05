import { useState } from "react";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";
import emailjs from "emailjs-com";

const serviceID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const templateID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatusMessage("");

    try {
      const result = await emailjs.send(
        serviceID, // Service ID
        templateID, // Template ID
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
        },
        publicKey // Public Key
      );

      console.log("Email sent successfully:", result.text);
      setStatusMessage("Message sent successfully!");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("Error sending email:", error);
      setStatusMessage("Failed to send email. Please try again later.");
    }
  };

  return (
    <div
      id="contact-info"
      className="bg-light-background dark:bg-dark-background text-light-text dark:text-dark-text py-12 md:py-20 "
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-primary dark:text-dark-primary mb-10">
          Contact Information
        </h2>

        {/* Contact Details */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12">
          {/* Email Contact */}
          <div className="p-6 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-md hover:shadow-xl transition flex flex-col justify-center items-center">
            <div className="space-y-6">
              <div className="">
                <div className="flex items-center mb-4">
                  <FaEnvelope size={24} className="text-indigo-600 dark:text-indigo-400 mr-4" />
                  <h4 className="text-lg font-semibold text-indigo-600 dark:text-indigo-400">Email</h4>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Feel free to reach us via email at:
                </p>
                <a href="mailto:akashsaha1313@gmail.com" className="text-indigo-600 dark:text-indigo-400 hover:underline">
                  akashsaha1313@gmail.com
                </a>
              </div>

              <div className="">
                <div className="flex items-center mb-2">
                  <FaPhoneAlt size={24} className="text-indigo-600 dark:text-indigo-400 mr-4" />
                  <h4 className="text-lg font-semibold text-indigo-600 dark:text-indigo-400">Phone</h4>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-300">You can also call us at:</p>
                <a href="tel:+8801748174056" className="text-indigo-600 dark:text-indigo-400 hover:underline">
                  +8801748174056
                </a>
              </div>

              <div className="">
                <div className="flex items-center mb-2">
                  <FaMapMarkerAlt size={24} className="text-indigo-600 dark:text-indigo-400 mr-4" />
                  <h4 className="text-lg font-semibold text-indigo-600 dark:text-indigo-400">Location</h4>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-300">My current location</p>
                <a
                  href="https://wa.me/1234567890"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-indigo-600 dark:text-indigo-400 hover:underline"
                >
                  Dhaka, Bangladesh
                </a>
              </div>
            </div>

          </div>

          {/* Contact Form */}
          <div className="">
            <h3 className="text-xl font-semibold text-indigo-600 dark:text-indigo-400 mb-4">
              Send Me a Message
            </h3>
            {statusMessage && (
              <p className="text-center text-green-500 dark:text-green-300 mb-4">{statusMessage}</p>
            )}
            <form onSubmit={handleSubmit} className=" mx-auto space-y-4">
              <div>
                <label htmlFor="name" className="block  font-semibold dark:text-gray-200">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200"
                />
              </div>

              <div>
                <label htmlFor="email" className="block font-semibold dark:text-gray-200">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200"
                />
              </div>

              <div>
                <label htmlFor="message" className="block font-semibold dark:text-gray-200">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="4"
                  className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200"
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
    </div >
  );
};

export default ContactInformation;
