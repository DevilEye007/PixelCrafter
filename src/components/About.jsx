import React from "react";

const About = () => {
  const info = [
    { text: "Completed Projects", count: "10" },
    { text: "Companies Work", count: "01" }
  ];

  return (
    <section id="about" className="py-14 text-white bg-[#0f172a]">
      <div className="text-center">
        <h3 
          className="text-4xl font-bold"
          data-aos="fade-right"
          data-aos-duration="800"
        >
          About <span className="text-[#FF6F00]">Me</span>
        </h3>
        <p 
          className="text-gray-400 my-3 text-lg"
          data-aos="fade-left"
          data-aos-duration="800"
          data-aos-delay="200"
        >
          My introduction
        </p>
      </div>

      <div className="flex md:flex-row flex-col-reverse items-center md:gap-10 gap-12 px-6 md:px-20 max-w-7xl mx-auto mt-10">
        {/* About Text Block - Slides from left */}
        <div 
          className="p-4 bg-[#1f2937] rounded-2xl shadow-[0_15px_40px_rgba(0,0,0,0.3)] transform hover:scale-[1.02] hover:rotate-[1deg] transition-all duration-700 ease-in-out"
          data-aos="fade-right"
          data-aos-duration="1000"
          data-aos-delay="300"
        >
          <p className="text-gray-300 leading-7 text-justify w-11/12 mx-auto">
            Hi, I’m <span className="text-[#FF6F00] font-semibold">Sadia Imran</span>, a passionate and creative Graphic Designer with a keen eye for detail and a love for visual storytelling. I specialize in crafting compelling designs that not only look good but communicate clearly and effectively.
            <br /><br />
            With experience in branding, logo design, social media graphics, posters, UI design, and more, I bring ideas to life through a balance of creativity and strategy. My goal is always to create designs that connect with the audience and elevate a brand's identity.
            <br /><br />
            I believe that great design is not just about aesthetics—it’s about solving problems and leaving a lasting impression. Whether you’re a startup, a personal brand, or an established business, I’m here to help you visually communicate your message with impact.
          </p>

          {/* Info Stats with 3D Animation - Slides from right */}
          <div 
            className="flex mt-10 items-center gap-10 justify-center md:justify-start"
            data-aos="fade-left"
            data-aos-duration="800"
            data-aos-delay="500"
          >
            {info.map((content, index) => (
              <div
                key={content.text}
                className="text-center transform hover:scale-110 transition-transform duration-500"
                data-aos="zoom-in"
                data-aos-duration="600"
                data-aos-delay={600 + (index * 200)} // Staggered animation
              >
                <h3 className="text-4xl font-bold text-white">
                  {content.count}
                  <span className="text-[#FF6F00]">+</span>
                </h3>
                <p className="text-gray-300 text-sm mt-1">{content.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;