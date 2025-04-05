// src/App.js
import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Service from "./components/Services";
import Skill from "./components/Skills";
import Project from "./components/Projects";

function App() {
  return (
    <div className="bg-gradient-to-r from-blue-500 to-purple-600 min-h-screen">
      <Header />
      <Hero />
      <About />
      <Service />
      <Skill />
      <Project />
    </div>
  );
}

export default App;
