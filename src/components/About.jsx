import React from "react";
import Lottie from "react-lottie";
import animationData from "../assets/user-interface.json";
import AboutCard from "./AboutCard";

const About = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div id="about" className="bg-light-background dark:bg-dark-background text-light-text dark:text-dark-text py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-primary dark:text-dark-primary mb-10">
          About Me
        </h2>

        {/* About Section Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Lottie Animation */}
          <div className="flex justify-center">
            <Lottie options={defaultOptions} />
          </div>

          {/* About Content */}
          <div className="space-y-4 text-base sm:text-lg leading-7">
            <AboutCard title="My Coding Journey">
              I began programming with a curious mind and a passion for problem-solving. Over time, I’ve developed expertise in front-end and back-end technologies, specializing in creating dynamic and user-friendly web applications.
            </AboutCard>
            <AboutCard title="My Skills">
              I have experience working with a variety of programming languages and frameworks, including React, Node.js, Express, and MongoDB. I am always eager to learn new technologies and expand my skill set.
            </AboutCard>
            <AboutCard title="My Projects">
              I have worked on a range of projects, from simple web applications to complex full-stack projects. I enjoy collaborating with others and am always looking for new opportunities to grow and learn.
            </AboutCard>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
