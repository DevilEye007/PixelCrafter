import React, { useState } from "react";
import {
  FaLinkedin,
  FaInstagram,
  FaEnvelope,
  FaWhatsapp,
} from "react-icons/fa";

const Bot = () => {
  const [open, setOpen] = useState(false);

  const socialLinks = [
    {
      icon: <FaLinkedin />,
      url: "https://www.linkedin.com/in/sadiaa-zia-485906352/",
    },
    {
      icon: <FaInstagram />,
      url: "https://www.instagram.com/sad1a.imran?igsh=YTY3ajBzOTRsMmkw",
    },
    {
      icon: <FaEnvelope />,
      url: "mailto:apixel.crafters27@gmail.com",
    },
    {
      icon: <FaWhatsapp />,
      url: "https://wa.me/923409740991",
    },
  ];

  return (
    <>
      {/* Chat Button */}
      <div
        onClick={() => setOpen(!open)}
        className="fixed bottom-5 sm:right-8 right-4 z-[999] cursor-pointer text-white text-3xl bg-[#FF6F00] w-16 h-16 flex items-center justify-center rounded-full animate-bounce hover:animate-none transition-all duration-300 shadow-lg"
        title="Connect"
      >
        <ion-icon name="chatbubble-ellipses"></ion-icon>
      </div>

      {/* Toggle Menu */}
      {open && (
        <div className="fixed bottom-24 sm:right-8 right-4 bg-white text-gray-800 rounded-xl shadow-lg p-4 flex flex-col gap-4 z-[998]">
          {socialLinks.map((item, index) => (
            <a
              key={index}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#FF6F00] text-2xl transition"
            >
              {item.icon}
            </a>
          ))}
        </div>
      )}
    </>
  );
};

export default Bot;
