import React, { useState } from "react";

const About = () => {
  const [selectedTab, setSelectedTab] = useState("aboutMe");

  const tabs = [
    { id: "aboutMe", label: "About Me" },
    { id: "education", label: "Education" },
    { id: "experience", label: "Experience" },
  ];

  const tabContent = {
    aboutMe: (
      <div className="text-gray-600 dark:text-gray-100">
        <h3 className="font-semibold text-lg mb-2">About Me</h3>
        <div>
          <p className="text-gray-600 dark:text-gray-400">
            My journey in coding started with curiosity and grew into a passion for
            building impactful applications. I specialize in front-end and back-end
            development, creating user-friendly web solutions.
          </p>

          <h4 className="font-semibold text-md mt-4">Personal Journey</h4>
          <p className="text-gray-600 dark:text-gray-400 mt-2">
            Like many, my journey hasn't been without challenges. Balancing academics and self-learning
            was often overwhelming, but these struggles shaped my resilience and problem-solving approach.
            I believe setbacks are stepping stones to growth, and each one has taught me the value of persistence.
          </p>

          <h4 className="font-semibold text-md mt-4">Likes</h4>
          <ul className="list-disc ml-4 mt-2 text-gray-600 dark:text-gray-400">
            <li>Exploring new technologies and learning programming frameworks.</li>
            <li>Watching movies, especially science fiction and thrillers.</li>
            <li>Cooking and experimenting with regional and cultural cuisines.</li>
            <li>Playing football and singing with friends during leisure time.</li>
          </ul>

          <h4 className="font-semibold text-md mt-4">Dislikes</h4>
          <ul className="list-disc ml-4 mt-2 text-gray-600 dark:text-gray-400">
            <li>Monotony in work; I thrive in dynamic environments.</li>
            <li>Overcomplicated workflows without clear objectives.</li>
            <li>Lack of communication in team settings.</li>
          </ul>
        </div>

      </div>
    ),
    education: (
      <div className="text-gray-600 dark:text-gray-200">
        <h3 className="font-semibold text-lg mb-2">Education</h3>
        <p className="text-gray-600 dark:text-gray-300">I have a strong academic background in computer science:</p>
        <ul className="list-disc ml-4 mt-2 text-gray-600 dark:text-gray-400">
          <li>B.Tech in Computer Science - KIIT University, Bhubaneswar, Odisha, India (2021-2025)</li>
          <li>Higher Secondary - Sylhet Govt. College (2018-2020)</li>
        </ul>
      </div>
    ),
    experience: (
      <div>
  <h3 className="font-semibold text-lg mb-2">Experience</h3>
  <p className="text-gray-600 dark:text-gray-400">
    I have hands-on experience in web development and software engineering:
  </p>
  <ul className="list-disc ml-4 mt-2 text-gray-600 dark:text-gray-400">
    <li>
      <span className="font-semibold">Web Development Intern</span> - RnPsoft 
      <br />
      <span className="text-sm">Jan 2024 - Apr 2024 · 4 months</span>
      <br />
      <span className="text-sm">Bhubaneswar, Odisha, India · Remote</span>
      <br />
      <span className="text-sm">Skills: React.js, Tailwind CSS, MongoDB, ExpressJS</span>
    </li>
    <li className="mt-4">
      <span className="font-semibold">Internship Trainee</span> - Oasis Infobyte 
      <br />
      <span className="text-sm">Mar 2023 - Apr 2023 · 2 months</span>
      <br />
      <span className="text-sm">India · Online</span>
      <br />
      <span className="text-sm">Skills: Git, HTML, CSS, React</span>
    </li>
  </ul>
</div>

    ),
  };

  return (
    <section id="about" className="py-12 bg-light-background dark:bg-dark-background text-gray-800 dark:text-gray-100 border-t border-b border-gray-200 dark:border-gray-700">
      <div className="max-w-5xl mx-auto px-4">
        {/* Title */}
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-primary dark:text-dark-primary mb-10">
          About
        </h2>

        {/* Tabs */}
        <div className="flex justify-center mb-6">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setSelectedTab(tab.id)}
              className={`px-4 py-2 text-sm font-medium border-b-2 transition ${selectedTab === tab.id
                  ? "border-blue-500 text-blue-500"
                  : "border-transparent text-gray-600 dark:text-gray-200 hover:text-blue-500"
                } focus:outline-none`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="p-6 bg-white dark:bg-gray-800 rounded shadow-md">{tabContent[selectedTab]}</div>
      </div>
    </section>
  );
};

export default About;
