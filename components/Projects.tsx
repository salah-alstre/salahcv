import Image from "next/image";
import Link from "next/link";
import React from "react";

const Projects: React.FC<{}> = () => {
  return (
    <section id="projects">
      <h2 className="text-white font-semibold text-center text-6xl pt-[35px]">
        PROJECTS
      </h2>
      <p className=" tracking-[0.5em] text-center text-transparent font-light pb-5  bg-clip-text bg-gradient-to-r from-purple-700 to-orange-500  text-1xl ">
        EXPLORE NOW
      </p>
      <div className=" container mx-auto 2xl  ">
        <div className="flex-col flex md:flex-row  mt-7">
          <Link
            href="https://github.com/salah-alstre/AwesomeProject"
            rel="noopener noreferrer"
  /* `rel="noopener noreferrer"`: أمان إضافي عند فتح الرابط في نافذة جديدة */

            target="_blank"
            className="z-[1]"
          >
            <div className="flex-row flex mb-5">
{/* عنصر <div> يستخدم Flexbox لعرض محتوى المشروع بشكل أفقي */}

              <Image
                src="/FirstProject.png"
                height={150}
                width={150}
                alt="First Project"
              />
              <div className="p-3">
                <p className="text-white font-semibold text-xl">My App</p>
                <p className="text-gray-500 text-[10px]">
                  The application allows you to easily book roles at barbers,<br />

                  Created by React Native.
                </p>
              </div>
            </div>
          </Link>
        
        </div>
      </div>
    </section>
  );
};
//مشاريعي
export default Projects;