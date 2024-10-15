import Image from "next/image";
import React from "react";

const Experience: React.FC<{}> = () => {
  return (
    <section id="experience">
      <h2 className="text-white font-semibold text-center text-6xl pt-[35px]">
        EXPERIENCE
      </h2>
      <p className="tracking-[0.5em] text-center text-transparent font-light pb-5 bg-clip-text bg-gradient-to-r from-purple-700 to-orange-500 text-1xl">
        EXPLORE NOW
      </p>
      <div className="container mx-auto 2xl">
        <div className="md:flex md:flex-row md:justify-between pt-5">
          <div className="flex items-center gap-3">
            <Image
              src={"/CodeZone.svg"}
              height={60}
              width={60}
              alt={"experience"}
            />
            <p className="text-gray-300">
              <span className="font-semibold">Project Collection /</span> Full Stack Developer
            </p>
          </div>
          <p className="text-gray-300 md:pt-0 pt-3">
            August 2023 - July 2024, Israel
          </p>
        </div>

        <p className="text-gray-300 pt-5">
        During my time at Code Zone College, I worked on several projects as part of my Full Stack Development program. These projects allowed me to apply my skills in
          <br />
          <br />
          I focused on developing web applications that deliver seamless user experiences, utilizing technologies such as React, Next.js, and Node.js. Through these projects, I gained practical experience in frontend and backend development, API

        </p>

        <div className="flex-col flex sm:flex-row">
          <div className="bg-transparent mt-5 mr-2 cursor-pointer rounded-3xl text-white py-2 px-5 border border-[#2E2E2E] w-max">
            React
          </div>
          <div className="bg-transparent mt-5 mr-2 cursor-pointer rounded-3xl text-white py-2 px-5 border border-[#2E2E2E] w-max">
          JavaScript
          </div>
          <div className="bg-transparent mt-5 mr-2 cursor-pointer rounded-3xl text-white py-2 px-5 border border-[#2E2E2E] w-max">
          MongoDB
          </div>
          <div className="bg-transparent  mt-5 cursor-pointer  rounded-3xl  text-white py-2 px-5  border border-[#2E2E2E] w-max">
          Node.js
           </div>
           <div className="bg-transparent  mt-5 cursor-pointer  rounded-3xl  text-white py-2 px-5  border border-[#2E2E2E] w-max">
          Next.js
           </div>
        </div>
      </div>
    </section>
  );
};
//الخبرات
export default Experience;
// // شرح عن نفسي 
