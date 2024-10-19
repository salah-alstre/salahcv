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
            href="https://trailer-hub-sand.vercel.app/"
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
                  A Netflix-like platform built with React and Vite for browsing and watching movie trailers effortlessly.
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
                alt="BMW Showcase"
              />
              <div className="p-3">
                <p className="text-white font-semibold text-xl">BMW Showcase</p>
                <p className="text-gray-500 text-[10px] max-w-xs overflow-hidden text-ellipsis">
                  A web app to explore BMW models and features, showcasing the brand&apos;s excellence in the automotive industry.
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
                alt="AI Image Generator"
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
                alt="ContactEase"
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
       
        <div className="flex-col flex md:flex-row mt-7">
          <Link
            href="https://bmw-elegance.vercel.app/"
            rel="noopener noreferrer"
            target="_blank"
            className="z-[1]"
          >
            <div className="flex-row flex mb-5">
              <Image
                src="/Bmw-M.jpg"
                height={150}
                width={150}
                alt="BMW-Elegance"
              />
              <div className="p-3">
                <p className="text-white font-semibold text-xl">BMW-Elegance</p>
                <p className="text-gray-500 text-[10px] max-w-xs overflow-hidden text-ellipsis">
                  A captivating trailer that showcases the latest BMW models, emphasizing their design, performance, and advanced technology.
                </p>
              </div>
            </div>
          </Link>
          <Link
            href="https://dev-profile-i0avhbqjt-error-25s-projects.vercel.app/"
            rel="noopener noreferrer"
            target="_blank"
            className="z-[1]"
          >
            <div className="flex-row flex mb-5">
              <Image
                src="/Dev.jpg"
                height={150}
                width={150}
                alt="Dev-profile"
              />
              <div className="p-3">
                <p className="text-white font-semibold text-xl">Dev Profile</p>
                <p className="text-gray-500 text-[10px] max-w-xs overflow-hidden text-ellipsis">
                  This project is a User Profile Card Component built using React JSX. It provides a sleek and modern way to display user information in a visually appealing format.
                </p>
              </div>
            </div>
          </Link>
        </div>
            
        <div className="flex-col flex md:flex-row mt-7">
          <Link
            href="https://image-search-engine-teal-omega.vercel.app/"
            rel="noopener noreferrer"
            target="_blank"
            className="z-[1]"
          >
            <div className="flex-row flex mb-5">
              <Image
                src="/ImageSearch.jpg"
                height={150}
                width={150}
                alt="ImageSearch"
              />
              <div className="p-3">
                <p className="text-white font-semibold text-xl">Image Search Engine</p>
                <p className="text-gray-500 text-[10px] max-w-xs overflow-hidden text-ellipsis">
                A responsive landing page for the iPhone 15, showcasing its features and sleek design. Built with HTML, CSS, and JavaScript for an engaging user experience.</p>
              </div>
            </div>
          </Link>
          <Link
            href="https://salahcv.site/"
            rel="noopener noreferrer"
            target="_blank"
            className="z-[1]"
          >
            <div className="flex-row flex mb-5">
              <Image
                src="/My App.jpg"
                height={150}
                width={150}
                alt="Deve-profile"
              />
              <div className="p-3">
                <p className="text-white font-semibold text-xl">CV Project</p>
                <p className="text-gray-500 text-[10px] max-w-xs overflow-hidden text-ellipsis">
                An interactive personal CV showcasing my skills and professional experience. This project includes sections on personal information, education, work experience, skills, projects, and interests.</p>
              </div>
            </div>
          </Link>
        </div>
        
        <div className="flex-col flex md:flex-row mt-7">
          <Link
            href="https://project-snowy-zeta.vercel.app/"
            rel="noopener noreferrer"
            target="_blank"
            className="z-[1]"
          >
            <div className="flex-row flex mb-5">
              <Image
                src="/Apple.jpg"
                height={150}
                width={150}
                alt="Apple"
              />
              <div className="p-3">
                <p className="text-white font-semibold text-xl">Apple iPhone 15</p>
                <p className="text-gray-500 text-[10px] max-w-xs overflow-hidden text-ellipsis">
                A responsive landing page for the iPhone 15, showcasing its features and sleek design. Built with HTML, CSS, and JavaScript for an engaging user experience.</p>
              </div>
            </div>
          </Link>
          <Link
            href="https://devr-profile.vercel.app/"
            rel="noopener noreferrer"
            target="_blank"
            className="z-[1]"
          >
            <div className="flex-row flex mb-5">
              <Image
                src="/DEVE.jpg"
                height={150}
                width={150}
                alt="Deve-profile"
              />
              <div className="p-3">
                <p className="text-white font-semibold text-xl">Developer Portfolio</p>
                <p className="text-gray-500 text-[10px] max-w-xs overflow-hidden text-ellipsis">
                This project showcases my skills as a Full Stack Developer. Built with React and Tailwind CSS, it offers a sleek, responsive design. Explore different sections to learn more about my experience, skills, and projects.</p>
              </div>
            </div>
          </Link>
        </div>

      </div>
    </section>
  );
};

export default Projects;
