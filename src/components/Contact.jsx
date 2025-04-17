import React, { useState } from "react";
import { FaLinkedin, FaGithub, FaFacebook, FaWhatsapp } from "react-icons/fa"; // Importing social media icons

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [formStatus, setFormStatus] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Placeholder for form submission logic
    setFormStatus("Your message has been sent successfully!");
    // Reset form after submission
    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <section
      id="contact"
      className="py-16 px-6 bg-gradient-to-r from-purple-800 via-indigo-800 to-blue-800 text-white"
    >
      <h2 className="text-4xl font-bold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-orange-400">
        Contact Me
      </h2>
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-12">
        {/* Left Column: Contact Details */}
        <div className="space-y-6">
          <div className="text-center">
            <h3 className="text-2xl font-semibold text-teal-300">
              Feel free to reach out to me............!
            </h3>
          </div>

          <div className="space-y-4">
            <div className="flex justify-center items-center space-x-4">
              <span className="font-semibold text-teal-400">📧 Email:</span>
              <a
                href="mailto:your-email@example.com"
                className="text-orange-400 hover:text-teal-400 transition duration-300"
              >
                sahanvijerathna@gmail.com
              </a>
            </div>
            <div className="flex justify-center items-center space-x-4">
              <span className="font-semibold text-teal-400">📱 Phone:</span>
              <a
                href="tel:+1234567890"
                className="text-orange-400 hover:text-teal-400 transition duration-300"
              >
                +94 76 5660341
              </a>
            </div>
            {/* Social Media Icons */}
            <div className="flex justify-center space-x-6 mt-6">
              <a
                href="https://www.linkedin.com/in/sahan-wijerathne-b80a5b303"
                target="_blank"
                rel="noopener noreferrer"
                className="text-orange-400 hover:text-teal-400 transition duration-300"
              >
                <FaLinkedin size={35} />
              </a>
              <a
                href="https://github.com/SahanWijerathne00"
                target="_blank"
                rel="noopener noreferrer"
                className="text-orange-400 hover:text-teal-400 transition duration-300"
              >
                <FaGithub size={35} />
              </a>
              <a
                href="https://web.facebook.com/sahan.wijerathna.54"
                target="_blank"
                rel="noopener noreferrer"
                className="text-orange-400 hover:text-teal-400 transition duration-300"
              >
                <FaFacebook size={35} />
              </a>
              <a
                href="https://wa.me/+94765660341" // Replace with your WhatsApp number
                target="_blank"
                rel="noopener noreferrer"
                className="text-orange-400 hover:text-teal-400 transition duration-300"
              >
                <FaWhatsapp size={35} />
              </a>
            </div>
          </div>
        </div>

        {/* Right Column: Contact Form */}
        <div className="bg-gray-800 p-8 rounded-lg shadow-lg space-y-6">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label
                htmlFor="name"
                className="block text-lg font-semibold mb-2 text-teal-400"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className="w-full p-4 rounded-lg bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-500"
                placeholder="Enter your name"
                required
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-lg font-semibold mb-2 text-teal-400"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full p-4 rounded-lg bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-500"
                placeholder="Enter your email"
                required
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-lg font-semibold mb-2 text-teal-400"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                className="w-full p-4 rounded-lg bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-500"
                rows="6"
                placeholder="Write your message"
                required
              ></textarea>
            </div>
            <div className="text-center">
              <button
                type="submit"
                className="px-6 py-3 bg-orange-400 text-white font-semibold rounded-lg shadow-md hover:bg-orange-500 transition duration-300"
              >
                Send Message
              </button>
            </div>
          </form>

          {formStatus && (
            <div className="mt-6 text-center text-green-400 font-semibold">
              {formStatus}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Contact;
