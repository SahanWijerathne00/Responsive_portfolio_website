import React from "react";

const About = () => {
  return (
    <section
      id="about"
      className="flex items-center justify-center h-auto bg-gradient-to-r from-blue-500 to-teal-500 text-white px-6 py-8"
    >
      <div className="flex flex-col md:flex-row items-center justify-center w-full max-w-screen-lg space-y-8 md:space-y-0 md:space-x-16">
        {/* Profile Image with Glow Effect */}
        <div className="relative mb-8 md:mb-0 md:w-1/3 flex justify-center">
          <img
            src="https://via.placeholder.com/150" // Replace with your profile image URL
            alt="Profile"
            className="w-40 h-40 md:w-72 md:h-72 rounded-full object-cover border-4 border-white shadow-lg"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 opacity-50 rounded-full blur-lg animate-pulse"></div>
        </div>

        {/* Description and Other Elements */}
        <div className="md:w-2/3 text-center md:text-left space-y-6">
          <h1 className="text-4xl sm:text-5xl font-bold">About Me</h1>

          <p className="text-lg sm:text-xl mt-4 max-w-xl mx-auto md:mx-0">
            I am an undergraduate student currently in my final year of study.
            Throughout my academic journey, I have gained valuable knowledge in
            software engineering and web development. I have successfully
            completed several academic projects, where I applied theoretical
            concepts to real-world challenges. However, I am eager to expand my
            experience further by working on real-world projects, where I can
            apply my skills in a professional setting and continue to learn and
            grow in the field.
          </p>
          <p className="text-lg sm:text-xl mt-4 max-w-xl mx-auto md:mx-0">
            Also, I am particularly interested in collaborating on software
            development, working on scalable applications, and refining my
            problem-solving abilities in dynamic environments. I believe that by
            working on industry projects, I can further develop my skill set,
            contribute to meaningful solutions, and prepare myself for a
            successful career in the tech industry.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
