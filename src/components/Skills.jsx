// src/components/Skills.js
import React from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaGithub,
  FaPython,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiMongodb,
  SiNextdotjs,
  SiFigma,
  SiFlutter,
} from "react-icons/si";

const skills = [
  {
    name: "HTML",
    icon: <FaHtml5 className="text-4xl text-orange-600" />,
    rating: 90,
  },
  {
    name: "CSS",
    icon: <FaCss3Alt className="text-4xl text-blue-600" />,
    rating: 85,
  },
  {
    name: "JavaScript",
    icon: <FaJs className="text-4xl text-yellow-400" />,
    rating: 90,
  },
  {
    name: "React JS",
    icon: <FaReact className="text-4xl text-blue-500" />,
    rating: 85,
  },
  {
    name: "GitHub",
    icon: <FaGithub className="text-4xl text-black" />,
    rating: 80,
  },
  {
    name: "Tailwind CSS",
    icon: <SiTailwindcss className="text-4xl text-teal-400" />,
    rating: 90,
  },
  {
    name: "MongoDB",
    icon: <SiMongodb className="text-4xl text-green-600" />,
    rating: 70,
  },
  {
    name: "Next JS",
    icon: <SiNextdotjs className="text-4xl text-black" />,
    rating: 80,
  },
  {
    name: "Figma",
    icon: <SiFigma className="text-4xl text-blue-600" />,
    rating: 75,
  },
  {
    name: "Flutter",
    icon: <SiFlutter className="text-4xl text-blue-400" />,
    rating: 70,
  },
  {
    name: "Python",
    icon: <FaPython className="text-4xl text-blue-500" />,
    rating: 80,
  },
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="py-16 px-6 bg-gradient-to-r from-indigo-600 to-indigo-800 text-white"
    >
      <h2 className="text-3xl font-bold text-center mb-12">My Skills</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="bg-[#575656] rounded-lg shadow-lg p-4 transition transform hover:scale-95 hover:shadow-2xl"
          >
            <div className="flex justify-center mb-4">{skill.icon}</div>
            <h3 className="text-lg font-semibold text-center mb-2">
              {skill.name}
            </h3>

            {/* Progress Bar with White and Red Color */}
            <div className="w-full bg-white bg-opacity-25 rounded-full h-2.5 mb-2">
              <div
                className="bg-red-600 h-2.5 rounded-full"
                style={{ width: `${skill.rating}%` }}
              ></div>
            </div>
            <p className="text-sm text-center">{skill.rating}%</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
