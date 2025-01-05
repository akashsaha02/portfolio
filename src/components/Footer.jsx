import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';

const Footer = () => {

  return (
    <footer className="bg-gray-100 dark:bg-gray-800 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-300 mb-4">About Us</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              We provide top-notch solutions tailored to your needs. Our team is dedicated to delivering
              innovative and reliable services.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-300 mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="text-sm text-gray-600 dark:text-gray-400 hover:underline">
                  About
                </a>
              </li>
              <li>
                <a href="#projects" className="text-sm text-gray-600 dark:text-gray-400 hover:underline">
                  Projects
                </a>
              </li>
              <li>
                <a href="#contact" className="text-sm text-gray-600 dark:text-gray-400 hover:underline">
                  Contact
                </a>
              </li>

            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-300 mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li className="text-sm text-gray-600 dark:text-gray-400">
                Email:{" "}
                <a href="mailto:akashsaha1313@gmail.com" className="hover:underline">
                  akashsaha1313@gmail.com
                </a>
              </li>
              <li className="text-sm text-gray-600 dark:text-gray-400">
                Phone:{" "}
                <a href="tel:+8801748174056" className="hover:underline">
                  +8801748174056
                </a>
              </li>
              <li className="text-sm text-gray-600 dark:text-gray-400">
                Dhaka, Bangladesh
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-300 mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a
                href="https://github.com/akashsaha02"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400"
              >
                <FaGithub size={20} />              </a>
              <a
                href="https://twitter.com/akashsaha0002"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400"
              >
              <FaTwitter size={20} />
              </a>
              <a
                href="https://instagram.com/akashsaha02"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400"
              >
                <FaInstagram size={20} />
              </a>
              <a
                href="https://linkedin.com/in/akashsaha02"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400"
              >
                <FaLinkedin size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-8 border-t border-gray-300 dark:border-gray-700 pt-6 text-center">
          <p className="text-sm text-gray-600 dark:text-gray-400">
            &copy; {new Date().getFullYear()} Akash Saha. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
