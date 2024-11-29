import React, { useCallback, useState, useEffect, useRef} from 'react';
import { Link } from "react-router-dom";
import {getFeaturedProjects} from '../services/services'
import FeaturedProjectCard from '@/components/ui/featuredProjectCard';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"

const HomePage = () => {

  const [featuredProjects, setFeaturedProjects] = useState([]);

  const fetchFeaturedProjects = useCallback(async () => {
    const res = await getFeaturedProjects();
    if (!res) setError("Error getting featured projects")
    setFeaturedProjects(res)

  }, [featuredProjects, setFeaturedProjects])

  useEffect(() => {
    fetchFeaturedProjects();
  }, [])

  const plugin = useRef(
    Autoplay({ delay: 5000, stopOnInteraction: true })
  )

  return (
    <div className="min-h-screen text-white flex flex-col items-center justify-center px-6">
      {/* Header Section */}
      <header className="w-full max-w-5xl mx-auto text-center">
        <h1 className="text-5xl md:text-6xl font-bold mb-4">
          Hi, I'm <span className="text-green-500">[Ignacio]</span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-400 mb-6">
          A passionate Software Engineer who builds impactful solutions through clean code and innovative design.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex justify-center md:justify-end">
            <Link
              to="/about"
              className="bg-green-500 px-6 py-3 text-lg rounded-lg hover:bg-green-600 transition w-80"
            >
              Learn more about me
            </Link>
          </div>
          <div className="flex justify-center md:justify-start">
            <Link
              to="/projects"
              className="bg-gray-700 px-6 py-3 text-lg rounded-lg hover:bg-gray-600 transition w-80"
            >
              View all my projects
            </Link>
          </div>
        </div>
      </header>

      {/* Featured Projects Section */}
      <section className="w-full max-w-5xl mt-16">
        <h2 className="text-3xl font-semibold mb-8 text-center">
          Featured Projects
        </h2>
        {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {featuredProjects.length === 0 ? <div className='m-auto'>No featured projects</div> : (
            featuredProjects.map((featuredProject, index) => {
              return <FeaturedProjectCard name={featuredProject.name} description={featuredProject.description} image={featuredProject.image} id={featuredProject.id} key={index}/>
            })
          )}
          
        </div> */}

<Carousel
  plugins={[plugin.current]}
  className="relative max-w-full m-auto"
  onMouseEnter={plugin.current.stop}
  onMouseLeave={plugin.current.reset}
>
  <CarouselContent>
    {featuredProjects.map((featuredProject, index) => (
      <CarouselItem key={index} className=" sm:px-4 md:px-8">
        <div className="w-full max-w-xs sm:max-w-sm md:max-w-md m-auto">
          <FeaturedProjectCard
            name={featuredProject.name}
            description={featuredProject.description}
            image={featuredProject.image}
            id={featuredProject.id}
          />
        </div>
      </CarouselItem>
    ))}
  </CarouselContent>

  {/* Left Arrow */}
  <div className="absolute top-1/2 left-10 transform -translate-y-1/2 z-10">
    <CarouselPrevious />
  </div>

  {/* Right Arrow */}
  <div className="absolute top-1/2 right-10 transform -translate-y-1/2 z-10">
    <CarouselNext />
  </div>
</Carousel>

      </section>

      {/* Contact Section */}
      <footer className="w-full max-w-5xl mt-16 text-center">
        <h2 className="text-3xl font-semibold mb-4">Let's Connect</h2>
        <p className="text-gray-400 mb-6">
          I'm always open to discussing new opportunities or collaborations. Reach out and let's talk!
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

export default HomePage;