import { Typewriter } from "react-simple-typewriter";
import { motion } from "framer-motion"; // Install with `npm install framer-motion`
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";
import heroImg from "../assets/hero.png";

const Hero = () => {
  const socialLinks = [
    {
      href: "https://github.com/akashsaha02",
      icon: <FaGithub size={20} />,
    },
    {
      href: "https://linkedin.com/in/akashsaha02",
      icon: <FaLinkedin size={20} />,
    },
    {
      href: "https://twitter.com/akashsaha0002",
      icon: <FaTwitter size={20} />,
    },
    {
      href: "https://www.instagram.com/akashsaha02/",
      icon: <FaInstagram size={20} />,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 2, // Slower overall animation
        staggerChildren: 0.5, // Delay between child animations
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  const imageVariants = {
    animate: {
      translateY: [0, -10, 0], // Slight vertical movement
      // scale: [1, 1.1, 1], // Infinite scaling effect
      // rotate: [0, 10, -10, 0], // Slight rotation
      transition: {
        duration: 2, // Slower animation
        repeat: Infinity, // Infinite loop
        repeatType: "loop",
      },
    },
  };

  return (
    <div className="bg-light-background dark:bg-dark-background text-light-text dark:text-dark-text min-h-screen relative">
      

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Hero Section */}
        <motion.div
          className="flex flex-col justify-center items-center py-12 md:py-20"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          {/* Image Section */}
          <motion.div
            variants={imageVariants}
            animate="animate"
            className="relative"
          >
            <img
              src={heroImg}
              alt="Akash Saha - Hero Image"
              className="rounded-lg w-72 h-72 object-cover mx-auto"
            />
          </motion.div>

          {/* Text Section */}
          <motion.div
            className="flex flex-col justify-center items-center text-center"
            variants={itemVariants}
          >
            <p className="font-semibold text-xl text-indigo-600 dark:text-indigo-400 mt-8">
              👋 Hi there! I'm Akash Saha{" "}
            </p>
            <h1 className="text-3xl md:text-5xl font-bold text-gray-800 dark:text-gray-100 mt-4">
              I'm a{" "}
              <span className="text-indigo-600">
                <Typewriter
                  words={["Front-End Developer", "Problem Solver", "Tech Enthusiast"]}
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
            <motion.button
              className="bg-indigo-600 text-white px-4 py-2 rounded-md mt-4 hover:bg-indigo-700"
              variants={itemVariants}
            >
              <a href="/Akash-Saha-Resume.pdf" download>
                Download Resume
              </a>
            </motion.button>
          </motion.div>

          {/* Social Buttons */}
          <motion.div
            className="flex gap-4 mt-6"
            variants={containerVariants}
          >
            {socialLinks.map((link, index) => (
              <motion.a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-200 dark:bg-gray-800 p-3 rounded-full text-gray-700 dark:text-gray-300 hover:bg-indigo-600 dark:hover:bg-indigo-400 hover:text-white transition"
                variants={itemVariants}
              >
                {link.icon}
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
