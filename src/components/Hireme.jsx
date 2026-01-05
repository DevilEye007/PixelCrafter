import React, { useRef, useState } from "react";
import hireMe from "../assets/images/my2.png";

const Hireme = () => {
  const formRef = useRef(null);
  const [status, setStatus] = useState("");

  const handleSayHello = async (e) => {
    e.preventDefault();

    const formData = new FormData(formRef.current);

    try {
      const response = await fetch("https://formspree.io/f/xyzjqzqb", {
        method: "POST",
        headers: {
          Accept: "application/json",
        },
        body: formData,
      });

      if (response.ok) {
        setStatus("✅ Greetings sent successfully!");
        formRef.current.reset();
      } else {
        setStatus("❌ Failed to send Greetings. Try again.");
      }
    } catch (error) {
      setStatus("❌ Error sending Greetings.");
    }

    setTimeout(() => setStatus(""), 5000);
  };

  return (
    <section id="hireme" className="py-16 px-4 text-white bg-gray-900 relative overflow-hidden">
      <div className="text-center">
        <h3 
          className="text-4xl font-semibold"
          data-aos="fade-right"
          data-aos-duration="800"
        >
          Hire <span className="text-[#FF6F00]">Me</span>
        </h3>
        <p 
          className="text-gray-400 mt-3 text-lg"
          data-aos="fade-left"
          data-aos-duration="800"
          data-aos-delay="200"
        >
          Do you have any work?
        </p>
      </div>

      <div 
        className="relative px-6 py-10 mt-20 mx-auto bg-gradient-to-br from-gray-700 to-gray-800 rounded-3xl shadow-[0_10px_40px_rgba(0,0,0,0.6)] max-w-6xl flex flex-col-reverse lg:flex-row items-center gap-6 transform transition-all duration-700 hover:scale-[1.01] hover:shadow-[0_20px_60px_rgba(0,0,0,0.7)]"
        data-aos="zoom-in"
        data-aos-duration="1000"
        data-aos-delay="300"
      >
        {/* Text Section - Slides from left */}
        <div 
          className="z-10 lg:w-1/2"
          data-aos="fade-right"
          data-aos-duration="800"
          data-aos-delay="400"
        >
          <h2 className="text-3xl font-bold mb-4">Need a design that speaks?</h2>
          <p className="text-sm leading-6 text-gray-200 text-justify">
            I help brands, businesses, and individuals bring their vision to life through creative and meaningful graphic design. Whether it's logo design, brand identity, UI assets, or visual content for marketing. I've got you covered. Let's collaborate and craft something unique that captures your story and connects with your audience.
          </p>

          <form 
            ref={formRef} 
            onSubmit={handleSayHello} 
            className="mt-8"
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-delay="600"
          >
            <input type="hidden" name="name" value="Visitor" />
            <input type="hidden" name="message" value="A user clicked 'Say Hello' on your site!" />
            <input type="hidden" name="from" value="website@pixelcrafter.com" />
            <button
              type="submit"
              className="btn-primary hover:scale-105 transition-transform"
            >
              Say Hello
            </button>
          </form>

          {/* Status Message */}
          {status && (
            <p 
              className="mt-4 text-sm text-green-400 animate-fade-in"
              data-aos="fade-up"
              data-aos-duration="500"
            >
              {status}
            </p>
          )}
        </div>

        {/* Floating Image - Slides from right */}
        <div 
          className="relative lg:w-1/2 flex justify-center"
          data-aos="fade-left"
          data-aos-duration="800"
          data-aos-delay="500"
        >
          <div className="w-72 h-80 rounded-2xl shadow-xl overflow-hidden transform transition duration-700 ease-in-out hover:rotate-[3deg] hover:scale-105 perspective-[1000px] animate-float">
            <img
              src={hireMe}
              alt="Hire Me"
              className="w-full h-full object-cover rounded-2xl border-4 border-[#FF6F00]"
            />
            <div className="absolute inset-0 bg-[#FF6F00]/10 blur-sm pointer-events-none rounded-2xl" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hireme;