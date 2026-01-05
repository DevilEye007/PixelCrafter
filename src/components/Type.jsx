import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <div 
      className="typewriter-container"
      data-aos="fade-right"
      data-aos-duration="1000"
      data-aos-delay="300"
    >
      <Typewriter
        options={{
          strings: [
            "Logo Designer",
            "UI/UX Designer",
            "Poster Designer",
          ],
          autoStart: true,
          loop: true,
          deleteSpeed: 70,
          cursor: "▌", // Optional: Custom cursor
          delay: 50, // Typing speed
        }}
      />
    </div>
  );
}

export default Type;