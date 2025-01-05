import React from "react";
import { motion } from "framer-motion";

// SkillCard Component
const SkillCard = ({ skill, percentage, image }) => (
  <motion.div
    className="p-6 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-md hover:shadow-xl transition"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.5 }}
  >
    <div className="flex items-center mb-4 rose-100">
      <div className=" w-20 h-20 flex items-center justify-center">
        <img src={image} alt={skill} className="w-full mr-4" />

      </div>
      <h4 className="text-lg font-semibold text-indigo-600 dark:text-indigo-400">{skill}</h4>
    </div>
    <div className="bg-gray-200 dark:bg-gray-700 rounded-full h-2.5 mb-4">
      <div
        className="bg-indigo-600 dark:bg-indigo-400 h-2.5 rounded-full"
        style={{ width: `${percentage}%` }}
      ></div>
    </div>
    <p className="text-sm text-gray-600 dark:text-gray-300">{percentage}% proficiency</p>
  </motion.div>
);

const skillsData = [
  {
    skill: "HTML",
    percentage: 90,
    image: "https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg"
  },
  {
    skill: "CSS",
    percentage: 85,
    image: "https://upload.wikimedia.org/wikipedia/commons/6/62/CSS3_logo.svg"
  },
  {
    skill: "TailwindCSS",
    percentage: 80,
    image: "https://upload.wikimedia.org/wikipedia/commons/9/95/Tailwind_CSS_logo.svg"
  },
  {
    skill: "JavaScript",
    percentage: 80,
    image: "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png"
  },
  {
    skill: "React",
    percentage: 75,
    image: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
  },
  {
    skill: "Node.js",
    percentage: 70,
    image: "https://upload.wikimedia.org/wikipedia/commons/6/67/NodeJS.png"
  },
  {
    skill: "Firebase",
    percentage: 60,
    image: "https://upload.wikimedia.org/wikipedia/commons/3/37/Firebase_Logo.svg"
  },
  {
    skill: "MongoDB",
    percentage: 50,
    image: "https://upload.wikimedia.org/wikipedia/commons/9/93/MongoDB_Logo.svg"
  }, {
    skill: "Express",
    percentage: 65,
    image: "https://upload.wikimedia.org/wikipedia/commons/6/64/Expressjs.png"

  }
];

const Skills = () => {
  return (
    <div id="skills" className="bg-light-background dark:bg-dark-background text-light-text dark:text-dark-text py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-primary dark:text-dark-primary mb-10">
          Skills
        </h2>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {skillsData.map((skill, index) => (
            <SkillCard
              key={index}
              skill={skill.skill}
              percentage={skill.percentage}
              image={skill.image}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
