import React from 'react';
import { Link } from "react-router-dom";
import { Typewriter } from 'react-simple-typewriter';

const AboutPage = () => {
  return (
    <div className="min-h-screen pb-10 text-white flex flex-col items-center justify-start px-6">
      <header className="w-full max-w-5xl mx-auto text-center mt-16">
        <h1 className="text-5xl md:text-6xl font-bold mb-6">
          About <span className="text-green-500">Me</span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-400">
          <Typewriter
              words={[
                "Discover who I am, what I do, and what drives my passion for technology.",
              ]}
              loop={1}
              typeSpeed={10}
              deleteSpeed={30}
              cursor
            />
          
        </p>
      </header>

      <section className="w-full max-w-5xl mt-16 px-4">
        <div className="bg-gray-800 p-8 rounded-lg shadow-lg">
          <h2 className="text-3xl font-semibold mb-4 text-green-500">Who Am I?</h2>
          <p className="text-gray-300 leading-relaxed text-lg mb-6">
            My name is <span className="font-bold text-white">Ignacio Hernández Correa</span>, a 22-year-old computer science student from Córdoba, Argentina. 
            I'm a self-taught full-stack web developer with a deep passion for technology, design, and problem-solving. 
          </p>

          <h2 className="text-3xl font-semibold mb-4 text-green-500">My Journey</h2>
          <p className="text-gray-300 leading-relaxed text-lg mb-6">
            My journey into web development started from a place of curiosity and a desire to create impactful solutions. 
            I have spent countless hours learning, building, and refining my skills in both front-end and back-end technologies, 
            always striving for clean code and elegant design.
          </p>

          <h2 className="text-3xl font-semibold mb-4 text-green-500">Hobbies & Interests</h2>
          <p className="text-gray-300 leading-relaxed text-lg">
            Beyond coding, I find joy in many creative pursuits. 
            I love <span className="text-white font-bold">fishing</span>, 
            playing <span className="text-white font-bold">chess</span>,
            going to the <span className="text-white font-bold"> gym</span>,
            <span className="text-white font-bold"> singing</span>, 
            <span className="text-white font-bold"> drawing</span>, and immersing myself in 
            <span className="text-white font-bold"> music</span>. 
            These hobbies not only bring balance to my life but also inspire my work as a developer.
          </p>
        </div>
      </section>

      <footer className="w-full max-w-5xl mt-16 text-center">
        <h2 className="text-3xl font-semibold mb-4">Let's Connect</h2>
        <p className="text-gray-400 mb-6">
          Want to learn more or collaborate? Feel free to reach out!
        </p>
        <Link
          to="/contact"
          className="bg-green-500 px-6 py-3 text-lg rounded-lg hover:bg-green-600 transition"
        >
          Contact Me
        </Link>
      </footer>
    </div>
  );
};

export default AboutPage;