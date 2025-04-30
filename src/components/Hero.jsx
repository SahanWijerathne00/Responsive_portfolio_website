import React, { useEffect, useState } from "react";

const Hero = () => {
  const [text, setText] = useState("Front-end Developer");

  useEffect(() => {
    const typingEffect = () => {
      const targetText = "Front-end Developer";
      let currentText = "";
      let i = 0;

      const typingInterval = setInterval(() => {
        currentText += targetText[i];
        setText(currentText);
        i++;
        if (i === targetText.length) {
          clearInterval(typingInterval);
        }
      }, 100);

      return () => clearInterval(typingInterval);
    };

    typingEffect();
  }, []);

  return (
    <section
      id="home"
      className="flex items-center justify-center h-screen bg-gradient-to-r from-blue-500 to-teal-500 text-white px-6 py-8"
    >
      <div className="flex flex-col md:flex-row items-center justify-center w-full max-w-screen-lg space-y-8 md:space-y-0 md:space-x-16">
        {/* Profile Image with Glow Effect */}
        <div className="relative mb-8 md:mb-0 md:w-1/3 flex justify-center">
          <img
            src={"https://via.placeholder.com/150"} // Replace with your profile image URL
            alt="Profile"
            className="w-48 h-48 md:w-72 md:h-72 rounded-full object-cover border-4 border-white shadow-lg"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 opacity-50 rounded-full blur-lg animate-pulse"></div>
        </div>

        {/* Description and Other Elements */}
        <div className="md:w-2/3 text-center md:text-left space-y-6">
          <h1 className="text-4xl sm:text-5xl font-bold">Sahan Wijerathne</h1>
          <p className="text-xl sm:text-2xl">
            And I'm a <span className="font-semibold">{text}</span>
          </p>
          <p className="text-lg sm:text-xl max-w-xl mx-auto md:mx-0">
            I'm a web designer with extensive experience. I specialize in
            frontend design and website development.
          </p>

          {/* Download Resume Button */}
          <a
            href="your_resume_link_here.pdf" // Replace with your resume URL
            download
            className="inline-block py-2 px-6 bg-blue-600 text-white rounded-lg shadow-lg hover:bg-blue-700 transition duration-300 no-underline"
          >
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
