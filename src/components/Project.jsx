import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/pagination";

import projectOne from "../assets/images/project-1.png";
import projectTwo from "../assets/images/project-2.png";
import projectThree from "../assets/images/project-3.png";
import projectFour from "../assets/images/project-4.png";
import projectSix from "../assets/images/project-6.png";
import projectSeven from "../assets/images/project-7.png";

const projects = [
  {
    img: projectTwo,
    name: "Netflix Clone",
    github_link: "https://github.com/aryyan0701/Netflix_Clone",
  },
  {
    img: projectOne,
    name: "Type Verse (Typing Speed)",
    github_link: "https://github.com/aryyan0701/type_verse",
    live_link: "https://aryyan0701.github.io/type_verse/",
  },
  {
    img: projectThree,
    name: "Currency Converter",
    github_link: "https://github.com/aryyan0701/Currency_converter",
  },
  {
    img: projectFour,
    name: "Quizzify",
    github_link: "https://github.com/aryyan0701/Quizzify",
    live_link: "https://quizzad.netlify.app/",
  },
  {
    img: projectSix,
    name: "Bloggify",
    github_link: "https://github.com/aryyan0701/Bloggify",
    live_link: "https://aryyan0701.github.io/Bloggify/",
  },
  {
    img: projectSeven,
    name: "Sandbox Clone",
    github_link: "https://github.com/aryyan0701/sandbox_clone",
    live_link: "https://aryyan0701.github.io/sandbox_clone/",
  },
];

const Project = () => {
  return (
    <section id="projects" className="py-20 text-white bg-gray-900 relative">
      <div className="text-center">
        <h3 className="text-4xl font-semibold">
          My <span className="text-[#FF6F00]">Projects</span>
        </h3>
        <p className="text-gray-400 mt-3 text-lg">My Works</p>
      </div>

      <div className="flex max-w-6xl gap-6 px-5 mx-auto mt-12 items-center relative">
        <div className="w-full h-full">
          <Swiper
            slidesPerView={1.2}
            spaceBetween={20}
            breakpoints={{
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 2.5 },
            }}
            loop={true}
            autoplay={{ delay: 3000 }}
            pagination={{ clickable: true, el: ".custom-swiper-pagination" }}
            modules={[Pagination, Autoplay]}
          >
            {projects.map((project, i) => (
              <SwiperSlide key={i}>
                <div className="group bg-gradient-to-br from-gray-800 to-gray-700 border border-[#FF6F00] rounded-xl shadow-xl p-4 transform transition duration-700 ease-in-out hover:scale-[1.02] hover:rotate-[1deg]">
                  <div className="relative overflow-hidden rounded-lg">
                    <img
                      src={project.img}
                      alt={project.name}
                      className="w-full h-52 object-cover rounded-lg transition duration-500 group-hover:scale-105 group-hover:opacity-90"
                    />
                  </div>
                  <h3 className="text-xl font-semibold mt-4 mb-2 text-center">{project.name}</h3>
                  <div className="flex justify-center gap-4 mt-2">
                    <a
                      href={project.github_link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-gray-800 hover:bg-[#FF6F00] hover:text-white text-[#FF6F00] px-4 py-1 rounded transition duration-300"
                    >
                      GitHub
                    </a>
                    {project.live_link && (
                      <a
                        href={project.live_link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-gray-800 hover:bg-[#FF6F00] hover:text-white text-[#FF6F00] px-4 py-1 rounded transition duration-300"
                      >
                        Live
                      </a>
                    )}
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* 👇 Custom Dots */}
          <div className="custom-swiper-pagination mt-10 flex justify-center gap-2" />
        </div>
      </div>
    </section>
  );
};

export default Project;
