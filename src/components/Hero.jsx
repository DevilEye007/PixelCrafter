import React, { useRef, useEffect } from "react";
import my2 from "../assets/images/my2.png";
import Type from "./Type";

const socialMediaLinks = [
  "https://www.instagram.com/sad1a.imran?igsh=YTY3ajBzOTRsMmkw",
  "https://www.linkedin.com/in/sadiaa-zia-485906352/",
  "https://wa.me/923409740991",
  "mailto:apixel.crafters27@gmail.com"
];

const social_media = [
  "logo-instagram",
  "logo-linkedin",
  "logo-whatsapp",
  "mail-outline",
];

const Hero = () => {
  const contactRef = useRef(null);

  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex py-10 md:flex-row flex-col items-center overflow-hidden bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a]"
    >
    <br />
    
      {/* Profile Image with Animation - Slides from left */}
      <div 
        className="flex-1 flex items-center justify-center h-full perspective-[1000px]"
        data-aos="fade-right"
        data-aos-duration="1000"
        data-aos-delay="200"
      >
        <div className="w-[280px] h-[380px] md:w-[380px] md:h-[480px] bg-gradient-to-br from-[#111827] to-[#1f2937] rounded-3xl shadow-[0_20px_30px_rgba(0,0,0,0.5)] transform hover:rotate-y-6 hover:rotate-x-3 transition-transform duration-700 ease-out overflow-hidden group relative">
          
          {/* ✅ Zoom on Hover */}
          <img
            src={my2}
            alt="Sadia Imran"
            className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-in-out opacity-90 group-hover:opacity-100"
          />
          {/* Subtle Glow Overlay */}
          <div className="absolute inset-0 bg-[#FF6F00]/10 blur-sm group-hover:blur-none transition duration-500 pointer-events-none" />
        </div>
      </div>

      {/* Hero Text - Slides from right */}
      <div 
        className="flex-1 mt-10 md:mt-0 px-5 md:px-0"
        data-aos="fade-left"
        data-aos-duration="1000"
        data-aos-delay="400"
      >
        <div className="md:text-left text-center">
          <h1 
            className="md:text-5xl text-2xl md:leading-normal leading-10 text-white font-extrabold transition-all duration-500"
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-delay="600"
          >
            <span className="text-[#FF6F00] md:text-6xl text-5xl drop-shadow-md">
              Hello!
              <br />
            </span>
            My Name is{" "}
            <span className="bg-gradient-to-r from-[#FF6F00] to-[#923f00] text-transparent bg-clip-text">
              Sadia Imran
            </span>
          </h1>
          
          <h4 
            className="md:text-xl text-2xl md:leading-normal leading-10 text-white font-extrabold transition-all duration-500 mt-4"
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-delay="700"
          >
            And I am a
          </h4>

          <h4 
            className="md:text-2xl text-lg md:leading-normal leading-5 mt-4 font-bold text-[#FF6F00]"
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-delay="800"
          >
            <Type />
          </h4>

          {/* Button with fade-up animation */}
          <div
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-delay="900"
          >
            <button
              onClick={scrollToContact}
              className="btn-primary mt-8 transition-transform hover:scale-105 hover:shadow-lg hover:translate-y-1 duration-300 ease-in-out"
            >
              Connect with Me
            </button>
          </div>

          {/* Social Icons with staggered animation */}
          <div 
            className="mt-8 text-3xl flex items-center md:justify-start justify-center gap-5"
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-delay="1000"
          >
            {social_media.map((icon, index) => (
              <a
                key={icon}
                href={socialMediaLinks[index]}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-[#FF6F00] transform hover:scale-125 hover:-rotate-6 transition-all duration-300 ease-in-out"
                data-aos="zoom-in"
                data-aos-duration="500"
                data-aos-delay={1000 + (index * 100)} // Staggered delay
              >
                <ion-icon name={icon}></ion-icon>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Hidden scroll anchor */}
      <div ref={contactRef}></div>
    </section>
  );
};

export default Hero;