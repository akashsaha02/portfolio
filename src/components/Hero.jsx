import { useState } from "react";
import { Typewriter } from "react-simple-typewriter";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa"; // Install with `npm install react-icons`
import heroImg from "../assets/hero.png";

const Hero = () => {
  const socialLinks = [
    {
      href: "https://github.com/yourusername",
      icon: <FaGithub size={20} />,
    },
    {
      href: "https://linkedin.com/in/yourusername",
      icon: <FaLinkedin size={20} />,
    },
    {
      href: "https://twitter.com/yourusername",
      icon: <FaTwitter size={20} />,
    },
  ];

  return (
    <div className="bg-light-background dark:bg-dark-background text-light-text dark:text-dark-text">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    
        {/* Hero Section */}
        <div className="flex flex-col justify-center items-center py-20">
          {/* Image Section */}
          <div>
            <img
              src={heroImg}
              alt="Akash Saha - Hero Image"
              className="rounded-lg w-72 h-72 object-cover mx-auto"
            />
          </div>

          {/* Text Section */}
          <div className="flex flex-col justify-center items-center text-center">
            <h1 className="text-4xl font-bold text-gray-800 dark:text-gray-100 mt-8">
              Hi, I'm{" "}
              <span className="text-indigo-600">
                <Typewriter
                  words={["Akash Saha", "a Web Developer", "a Tech Enthusiast"]}
                  loop={true}
                  cursor
                  cursorStyle="|"
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={1000}
                />
              </span>
            </h1>
            <p className="text-gray-600 dark:text-gray-400 mt-4 max-w-3xl">
              I specialize in building modern, responsive, and user-friendly
              web applications. Passionate about creating seamless digital
              experiences, I focus on clean design, efficient code, and
              delivering value to end users.
            </p>
            <button className="bg-indigo-600 text-white px-4 py-2 rounded-md mt-4 hover:bg-indigo-700">
              View My Work
            </button>

            {/* Social Buttons */}
            <div className="flex gap-4 mt-6">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-200 dark:bg-gray-800 p-3 rounded-full text-gray-700 dark:text-gray-300 hover:bg-indigo-600 dark:hover:bg-indigo-400 hover:text-white transition"
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
