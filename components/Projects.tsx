import Image from "next/image";
import Link from "next/link";
import React from "react";

const Projects: React.FC<{}> = () => {
  return (
    <section id="projects">
      <h2 className="text-white font-semibold text-center text-6xl pt-[35px]">
        PROJECTS
      </h2>
      <p className="tracking-[0.5em] text-center text-transparent font-light pb-5 bg-clip-text bg-gradient-to-r from-purple-700 to-orange-500 text-1xl">
        EXPLORE NOW
      </p>
      <div className="container mx-auto 2xl">
        <div className="flex-col flex md:flex-row mt-7">
          <Link
            href="https://omar413.club/"
            rel="noopener noreferrer"
            target="_blank"
            className="z-[1]"
          >
            <div className="flex-row flex mb-5">
              <Image
                src="/netflix.error.jpg"
                height={150}
                width={150}
                alt="First Project"
              />
              <div className="p-3">
                <p className="text-white font-semibold text-xl">TrailerHub</p>
                <p className="text-gray-500 text-[10px] max-w-xs overflow-hidden text-ellipsis">
                  A Netflix-like platform built with React and Vite for
                  browsing and watching movie trailers effortlessly.
                </p>
              </div>
            </div>
          </Link>
          <Link
            href="https://ev-bmw.vercel.app/"
            rel="noopener noreferrer"
            target="_blank"
            className="z-[1]"
          >
            <div className="flex-row flex mb-5">
              <Image
                src="/bmw-love.jpg"
                height={150}
                width={150}
                alt="HireSide"
              />
              <div className="p-3">
                <p className="text-white font-semibold text-xl">BMW Showcase</p>
                <p className="text-gray-500 text-[10px] max-w-xs overflow-hidden text-ellipsis">
                  A web app to explore BMW models and features,
                   showcasing the brand&apos;s excellence in the automotive industry.
                </p>

              </div>
            </div>
          </Link>
        </div>
        <div className="flex-col flex md:flex-row">
          <Link
            href="https://ai-image-generator-theta-vert.vercel.app/"
            rel="noopener noreferrer"
            target="_blank"
            className="z-[1]"
          >
            <div className="flex-row flex mb-5">
              <Image
                src="/ai-image.jpg"
                height={150}
                width={150}
                alt="VergeSystems"
              />
              <div className="p-3">
                <p className="text-white font-semibold text-xl">AI Image Generator</p>
                <p className="text-gray-500 text-[10px] max-w-xs overflow-hidden text-ellipsis">
                  Generates images from text descriptions using the OpenAI API, providing an intuitive way to unleash creativity.
                </p>
              </div>
            </div>
          </Link>
          <Link
            href="https://contact-form-two-nu.vercel.app/"
            rel="noopener noreferrer"
            target="_blank"
            className="z-[1]"
          >
            <div className="flex-row flex mb-5">
              <Image
                src="/email_error.jpg"
                height={150}
                width={150}
                alt="Payoasis"
              />
              <div className="p-3">
                <p className="text-white font-semibold text-xl">ContactEase</p>
                <p className="text-gray-500 text-[10px] max-w-xs overflow-hidden text-ellipsis">
                  A customizable, responsive contact form in HTML and CSS for effective communication.
                </p>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Projects;
