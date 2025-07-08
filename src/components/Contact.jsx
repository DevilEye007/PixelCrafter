import React, { useState } from "react";

const Contact = () => {
  const contact_info = [
    { logo: "mail", text: "pixel.crafters27@gmail.com" },
    { logo: "location", text: "Gujranwala, Pakistan" },
  ];

  const [service, setService] = useState("UI Design");
  const [customService, setCustomService] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [status, setStatus] = useState(""); // "success" | "error" | ""

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      message: formData.message,
      service: service === "Other" ? customService : service,
    };

    try {
      const res = await fetch("https://formspree.io/f/xyzjqzqb", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (res.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", phone: "", message: "" });
        setCustomService("");
        setService("UI Design");
      } else {
        setStatus("error");
      }
    } catch (error) {
      setStatus("error");
    }
  };

  return (
    <section
      id="contact"
      className="py-20 px-4 bg-gray-900 text-white relative overflow-hidden"
    >
      <div className="text-center">
        <h3 className="text-4xl font-semibold">
          Contact <span className="text-[#FF6F00]">Me</span>
        </h3>
        <p className="text-gray-400 mt-3 text-lg">Get in touch</p>
      </div>

      <div className="mt-16 flex flex-col-reverse md:flex-row gap-10 max-w-6xl bg-gray-800 md:p-10 p-4 rounded-xl mx-auto shadow-lg transform transition duration-500 hover:scale-[1.01]">
        {/* Form with message feedback */}
        <form
          onSubmit={handleSubmit}
          className="flex-1 flex flex-col gap-5 animate-fade-in-up"
        >
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
            required
            className="bg-gray-700 p-3 rounded-md outline-none focus:ring-2 focus:ring-[#FF6F00] transition"
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your Email Address"
            required
            className="bg-gray-700 p-3 rounded-md outline-none focus:ring-2 focus:ring-[#FF6F00] transition"
          />
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Your Phone Number"
            required
            className="bg-gray-700 p-3 rounded-md outline-none focus:ring-2 focus:ring-[#FF6F00] transition"
          />

          {/* Service Selection */}
          <div className="text-gray-300">
            <label className="block mb-2 font-medium text-white">
              Select a Service:
            </label>
            <select
              name="service"
              value={service}
              onChange={(e) => setService(e.target.value)}
              className="bg-gray-700 p-3 rounded-md outline-none focus:ring-2 focus:ring-[#FF6F00] transition w-full"
            >
              <option value="UI Design">UI Design</option>
              <option value="Logo Design">Logo Design</option>
              <option value="Branding">Branding</option>
              <option value="Social Media Post">Social Media Post</option>
              <option value="Video Editing">Video Editing</option>
              <option value="Other">Other</option>
            </select>
          </div>

          {service === "Other" && (
            <input
              type="text"
              name="customService"
              value={customService}
              onChange={(e) => setCustomService(e.target.value)}
              placeholder="Please describe your service requirement"
              className="bg-gray-700 p-3 rounded-md outline-none focus:ring-2 focus:ring-[#FF6F00]"
              required
            />
          )}

          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your Message"
            rows={6}
            required
            className="bg-gray-700 p-3 rounded-md outline-none focus:ring-2 focus:ring-[#FF6F00] transition resize-none"
          ></textarea>

          <button
            type="submit"
            className="bg-[#FF6F00] hover:bg-[#e66000] text-white px-6 py-2 rounded-md w-fit transition duration-300"
          >
            Send Message
          </button>

          {/* Feedback Message */}
          {status === "success" && (
            <p className="text-green-400 mt-2">✅ Message sent successfully!</p>
          )}
          {status === "error" && (
            <p className="text-red-400 mt-2">❌ Failed to send. Try again later.</p>
          )}
        </form>

        {/* Contact Info */}
        <div className="flex flex-col gap-6 text-gray-300 animate-fade-in-down">
          {contact_info.map((contact, i) => (
            <div key={i} className="flex items-center gap-4">
              <div className="min-w-[3.5rem] min-h-[3.5rem] flex items-center justify-center text-2xl text-white bg-[#FF6F00] rounded-full shadow-md">
                <ion-icon name={contact.logo}></ion-icon>
              </div>
              <p className="text-sm md:text-base break-words">{contact.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;
