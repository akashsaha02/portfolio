import React, { useState } from "react";
import AboutCard from "./AboutCard"; // Assuming you have a reusable card component

const About = () => {
  const [selectedTab, setSelectedTab] = useState("aboutMe");

  const renderContent = () => {
    switch (selectedTab) {
      case "education":
        return (
          <div className="space-y-4 text-base sm:text-lg leading-7">
            <AboutCard title="Education">
              <p>I have completed my Higher Secondary Certification (HSC) and furthered my studies in computer science. Through academic programs, I've gained both theoretical and practical knowledge in programming and software development.</p>
              <ul className="mt-4 list-disc pl-6">
                <li>Bachelor of Science in Computer Science - XYZ University (2021-2024)</li>
                <li>High School - ABC School (2016-2020)</li>
              </ul>
            </AboutCard>
          </div>
        );
      case "experience":
        return (
          <div className="space-y-4 text-base sm:text-lg leading-7">
            <AboutCard title="Experience">
              <p>I have worked with various teams on projects involving web development. I’ve contributed to both front-end and back-end tasks, and am proficient in technologies like React, Node.js, Express, and MongoDB.</p>
              <ul className="mt-4 list-disc pl-6">
                <li>Software Developer - XYZ Company (2023-Present)</li>
                <li>Frontend Developer Intern - ABC Startup (2022-2023)</li>
              </ul>
            </AboutCard>
          </div>
        );
      case "aboutMe":
      default:
        return (
          <div className="space-y-4 text-base sm:text-lg leading-7">
            <AboutCard title="My Coding Journey">
              <p>I began programming with a curious mind and a passion for problem-solving. Over time, I’ve developed expertise in front-end and back-end technologies, specializing in creating dynamic and user-friendly web applications.</p>
            </AboutCard>
            <AboutCard title="My Skills">
              <p>I have experience working with a variety of programming languages and frameworks, including:</p>
              <ul className="mt-4 list-disc pl-6">
                <li>React.js, Next.js, Redux</li>
                <li>Node.js, Express.js</li>
                <li>MongoDB, SQL</li>
                <li>HTML, CSS, JavaScript</li>
                <li>Version control with Git & GitHub</li>
              </ul>
            </AboutCard>
            <AboutCard title="My Projects">
              <p>I have worked on a range of projects, from simple web applications to complex full-stack projects. Here are a few examples:</p>
              <ul className="mt-4 list-disc pl-6">
                <li>Portfolio Website</li>
                <li>E-commerce Web App</li>
                <li>Task Management Application (MERN Stack)</li>
              </ul>
            </AboutCard>
          </div>
        );
    }
  };

  return (
    <div id="about" className="bg-light-background dark:bg-dark-background text-light-text dark:text-dark-text py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-primary dark:text-dark-primary mb-10">
          About Me
        </h2>

        {/* Tabs */}
        <div className="tabs mb-10 justify-center">
          <a
            onClick={() => setSelectedTab("aboutMe")}
            className={`tab tab-bordered ${selectedTab === "aboutMe" ? "tab-active" : ""}`}
          >
            About Me
          </a>
          <a
            onClick={() => setSelectedTab("education")}
            className={`tab tab-bordered ${selectedTab === "education" ? "tab-active" : ""}`}
          >
            Education
          </a>
          <a
            onClick={() => setSelectedTab("experience")}
            className={`tab tab-bordered ${selectedTab === "experience" ? "tab-active" : ""}`}
          >
            Experience
          </a>
        </div>

        {/* Content based on selected tab */}
        <div className="space-y-10">
          {/* About Content */}
          <div className="w-full">{renderContent()}</div>
        </div>
      </div>
    </div>
  );
};

export default About;
