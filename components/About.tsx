import React from "react";

const About: React.FC<{}> = () => {
  return (
    <section
      id="about"
      className="flex flex-col items-center justify-center h-full relative overflow-hidden pt-[35px]"
      style={{ transform: "scale(0.9)" }}
    >
      <div className="flex flex-col justify-around flex-wrap items-center max-w-[900px]">
        <h1 className="text-white font-semibold text-6xl">ABOUT ME</h1>
        <p className="tracking-[0.5em] text-transparent font-light pb-5 bg-clip-text bg-gradient-to-r from-purple-700 to-orange-500 text-1xl">
          EXPLORE
        </p>
        <p className="text-gray-300 text-center">
          I am Salah Alstre, a recent graduate in Full Stack Development from Code Zone College in Israel, actively seeking a position in frontend or mobile app development. Throughout my studies, I have developed strong skills in React and React Native, and I have a deep passion for creating innovative software solutions.
          <br />
          <br />
          My academic projects focused on developing web and mobile applications that deliver seamless user experiences. I am committed to applying new technologies and achieving high standards of quality in every project I undertake.
        </p>
        <div className="text-gray-300 text-center mt-8">
          <h2 className="text-white font-semibold text-4xl">Skills & Expertise</h2>
          <ul className="list-disc list-inside mt-4">
            <li>Frontend Development: HTML, CSS, JavaScript</li>
            <li>Mobile App Development: React Native</li>
            <li>UX/UI Design: Sketch, Figma</li>
            <li>Full Stack Development: Node.js, Express, MongoDB</li>
            <li>Analytical thinking and problem-solving</li>
          </ul>
          <h2 className="text-white font-semibold text-4xl mt-8">Education</h2>
          <p className="text-gray-300 mt-4">
            Completed a comprehensive Full Stack Development program at Code Zone College, gaining expertise in both frontend and backend technologies.
          </p>          
        </div>
      </div>
    </section>
  );
};

export default About;
