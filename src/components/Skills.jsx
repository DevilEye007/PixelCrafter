import React from "react";
import {
  SiAdobephotoshop,
  SiAdobeillustrator,
  SiGimp,
  SiCoreldraw,
  SiWondershare,
} from "react-icons/si";

const Skills = () => {
  const skills = [
    { name: "GIMP", icon: <SiGimp />, level: "Intermediate", count: 100 },
    { name: "Illustrator", icon: <SiAdobeillustrator />, level: "Intermediate", count: 100 },
    { name: "Photoshop", icon: <SiAdobephotoshop />, level: "Advanced", count: 80 },
    { name: "CorelDRAW", icon: <SiCoreldraw />, level: "Intermediate", count: 75 },
    { name: "Filmora", icon: <SiWondershare />, level: "Intermediate", count: 100 },
  ];

  return (
    <section id="skills" className="py-14 bg-gray-900 text-white">
      <div className="text-center px-4">
        <h3 className="text-4xl font-bold">
          My <span className="text-[#FF6F00]">Skills</span>
        </h3>
        <p className="text-gray-400 mt-3 text-lg">My knowledge</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 px-4 mt-12 justify-items-center">
        {skills.map((skill, i) => (
          <div
            key={i}
            className="group border-2 border-[#FF6F00] w-full max-w-[13rem] bg-gradient-to-br from-gray-800 to-gray-700 p-5 rounded-3xl shadow-lg hover:scale-105 hover:rotate-1 transition-all duration-700 ease-in-out"
          >
            <p className="text-xl mb-3 font-semibold text-center">{skill.name}</p>

            <div
              style={{
                background: `conic-gradient(#FF6F00 ${skill.count}%, #2e2e2e ${skill.count}%)`,
              }}
              className="w-32 h-32 mx-auto rounded-full flex items-center justify-center shadow-inner transition-transform group-hover:scale-110 group-hover:rotate-3 duration-700"
            >
              <div className="text-5xl w-28 h-28 bg-gray-900 rounded-full flex items-center justify-center group-hover:text-[#FF6F00] transition duration-500">
                {skill.icon}
              </div>
            </div>

            <p className="text-center text-lg mt-4 font-bold text-[#FF6F00]">{skill.level}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
