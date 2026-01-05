import React, { useEffect, useState } from "react";

const Navbar = () => {
  const [sticky, setSticky] = useState(false);
  const [open, setOpen] = useState(true); // Mobile menu opens by default

  const menuLinks = [
    { name: "HOME", link: "#home" },
    { name: "ABOUT", link: "#about" },
    { name: "SKILLS", link: "#skills" },
    { name: "CONTACT", link: "#contact" },
  ];

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setSticky(window.scrollY > 0);
    });

    // Optional: Auto-close mobile menu after 3 seconds
    const timer = setTimeout(() => {
      setOpen(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <nav
      className={`fixed w-full left-0 top-0 z-[999] transition-all duration-500 ease-in-out ${
        sticky
          ? "bg-white/60 backdrop-blur-md text-gray-900 shadow-md"
          : "text-white"
      }`}
    >
      <div className="flex items-center justify-between">
        {/* Logo */}
        <div className="mx-7">
          <h4 className="text-4xl uppercase font-bold hover:scale-105 hover:rotate-1 transform transition-transform duration-500">
            <span className="text-[#FF6F00]">Pixel</span>Crafter
          </h4>
        </div>

        {/* Desktop Menu */}
        <div
          className={`${
            sticky ? "md:bg-white/0 bg-white" : "bg-white"
          } text-gray-900 md:block hidden px-7 py-2 font-medium rounded-bl-full`}
        >
          <ul className="flex items-center gap-1 py-2 text-lg">
            {menuLinks.map((menu, i) => (
              <li
                key={i}
                className="px-6 transform transition-transform duration-300 hover:scale-110 hover:text-[#FF6F00]"
              >
                <a href={menu.link}>{menu.name}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* Hamburger Icon */}
        <div
          onClick={() => setOpen(!open)}
          className={`z-[999] transition-transform duration-300 ${
            open ? "rotate-90 text-gray-900" : "text-gray-100"
          } text-3xl md:hidden m-5 cursor-pointer`}
        >
          <ion-icon name={open ? "close" : "menu"}></ion-icon>
        </div>

        {/* Mobile Menu with 3D Animation */}
        <div
          className={`md:hidden text-gray-900 absolute w-2/3 h-screen px-7 py-2 font-medium bg-white top-0 shadow-2xl transform-gpu origin-right transition-all duration-700 ease-[cubic-bezier(0.68,-0.55,0.27,1.55)]`}
          style={{
            right: open ? "0" : "-100%",
            transform: open
              ? "rotateY(0deg) scale(1)"
              : "rotateY(20deg) scale(0.95)",
            perspective: "1000px",
          }}
        >
          <ul className="flex flex-col justify-center h-full gap-10 py-2 text-lg">
            {menuLinks.map((menu, i) => (
              <li
                key={i}
                onClick={() => setOpen(false)}
                className="px-6 transform transition-transform duration-300 hover:scale-110 hover:text-[#FF6F00]"
              >
                <a className="font-bold" href={menu.link}>{menu.name}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
