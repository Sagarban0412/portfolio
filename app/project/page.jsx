"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

const ProjectsPage = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const projects = [
    {
      id: 1,
      title: "Movies Hub",
      description:
        "A Movies search website that allows users to search for movies and TV shows, view details, and add them to their watchlist.",
      image: "/image.jpg",
      technologies: ["React", "TMDB API"],
      category: "Frontend",
      liveUrl: "https://moviedetailer.vercel.app/",
      githubUrl: "https://github.com/Sagarban0412/fetch_movies.git",
      featured: true,
    },
    {
      id: 2,
      title: "urlshortner",
      description:
        " A url shortner website that allows users to shorten their long urls.",
      image: "/image.jpg",
      technologies: ["Node js,Express, MongoDB"],
      category: "Full Stack",
      liveUrl: "#",
      githubUrl: "https://github.com/Sagarban0412/URL_Shortner.git",
      featured: true,
    },
    {
      id: 3,
      title: "Recipe Finder",
      description:
        "A recipe finder website that allows users to search for recipes, view details, with cooking steps.",
      image: "./image.jpg",
      technologies: ["React", "API Integration"],
      category: "Frontend",
      liveUrl: "https://tastybytes-pi.vercel.app/",
      githubUrl: "https://github.com/Sagarban0412/Recipe..git",
      featured: false,
    },
    {
      id: 4,
      title: "Blog CMS",
      description:
        "A content management system for bloggers with rich text editor, SEO optimization, and social media integration.",
      image: "./image.jpg",
      technologies: ["Next.js", "Prisma", "PostgreSQL"],
      category: "Full Stack",
      liveUrl: "#",
      githubUrl: "#",
      featured: false,
    },
    {
      id: 5,
      title: "Portfolio Website",
      description:
        "A modern, responsive portfolio website showcasing projects and skills with smooth animations and interactive elements.",
      image: "./image.jpg",
      technologies: ["Next.js", "Tailwind CSS"],
      category: "Frontend",
      liveUrl: "#",
      githubUrl: "#",
      featured: false,
    },
    {
      id: 6,
      title: "REST API Service",
      description:
        "A scalable REST API with authentication, rate limiting, and comprehensive documentation for a social media platform.",
      image: "./image.jpg",
      technologies: ["Node.js", "Express", "MongoDB", "JWT"],
      category: "Backend",
      liveUrl: "#",
      githubUrl: "#",
      featured: false,
    },
  ];

  const categories = ["All", "Full Stack", "Frontend", "Backend"];

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  const featuredProjects = projects.filter((project) => project.featured);

  return (
    <div className="bg-gray-900 min-h-screen text-white pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">
              My{" "}
              <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                Projects
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Explore my portfolio of web applications, from full-stack
              solutions to creative frontend experiences. Each project
              represents a unique challenge and learning opportunity.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="flex items-center gap-2 bg-gray-800 px-4 py-2 rounded-full">
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-sm text-gray-300">
                  {projects.length} Projects Completed
                </span>
              </div>
              <div className="flex items-center gap-2 bg-gray-800 px-4 py-2 rounded-full">
                <div className="w-3 h-3 bg-blue-400 rounded-full animate-pulse"></div>
                <span className="text-sm text-gray-300">
                  {featuredProjects.length} Featured Projects
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20 bg-gray-800">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Featured Projects
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Highlighting some of my most impactful and technically challenging
              projects
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {featuredProjects.map((project, index) => (
              <div
                key={project.id}
                className="group bg-gray-700 rounded-xl overflow-hidden hover:bg-gray-600 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl"
                style={isClient ? { animationDelay: `${index * 200}ms` } : {}}
              >
                <div className="relative overflow-hidden">
                  <div className="w-full h-64 bg-gray-800 overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      width={500} 
                      height={300} 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      onError={(e) => {
                        e.target.style.display = "none";
                        e.target.nextSibling.style.display = "flex";
                      }}
                    />

                    <div
                      className="w-full h-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white text-lg font-semibold"
                      style={{ display: "none" }}
                    >
                      {project.title}
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300"></div>
                  <div className="absolute top-4 right-4">
                    <span className="bg-yellow-500 text-black px-3 py-1 rounded-full text-sm font-semibold">
                      Featured
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="bg-gray-600 text-gray-200 px-3 py-1 rounded-full text-sm hover:bg-blue-600 transition-colors duration-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-4">
                    <a
                      href={project.liveUrl}
                      className="flex-1 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-6 py-3 rounded-lg font-semibold text-center transition-all duration-300 transform hover:scale-105"
                    >
                      Live Demo
                    </a>
                    <a
                      href={project.githubUrl}
                      className="flex-1 border-2 border-gray-500 hover:border-white text-gray-300 hover:text-white px-6 py-3 rounded-lg font-semibold text-center transition-all duration-300 transform hover:scale-105"
                    >
                      View Code
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* All Projects */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">All Projects</h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-8">
              Browse through my complete portfolio of web development projects
            </p>

            {/* Filter Buttons */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveFilter(category)}
                  className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 ${
                    activeFilter === category
                      ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg"
                      : "bg-gray-700 text-gray-300 hover:bg-gray-600 hover:text-white"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <div
                key={project.id}
                className="group bg-gray-800 rounded-xl overflow-hidden hover:bg-gray-700 transition-all duration-500 transform hover:scale-105 hover:shadow-xl"
                style={isClient ? { animationDelay: `${index * 100}ms` } : {}}
              >
                <div className="relative overflow-hidden">
                  <div className="w-full h-48 bg-gray-700 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      onError={(e) => {
                        e.target.style.display = "none";
                        e.target.nextSibling.style.display = "flex";
                      }}
                    />
                    <div
                      className="w-full h-full bg-gradient-to-br from-gray-600 to-gray-700 flex items-center justify-center text-gray-400 text-sm"
                      style={{ display: "none" }}
                    >
                      {project.title}
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300"></div>
                  {project.featured && (
                    <div className="absolute top-3 right-3">
                      <span className="bg-yellow-500 text-black px-2 py-1 rounded-full text-xs font-semibold">
                        Featured
                      </span>
                    </div>
                  )}
                  <div className="absolute top-3 left-3">
                    <span className="bg-blue-600 text-white px-2 py-1 rounded-full text-xs font-semibold">
                      {project.category}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 mb-4 text-sm leading-relaxed line-clamp-3">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-1 mb-4">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="bg-gray-700 text-gray-300 px-2 py-1 rounded text-xs hover:bg-blue-600 transition-colors duration-300"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="text-gray-500 text-xs px-2 py-1">
                        +{project.technologies.length - 3} more
                      </span>
                    )}
                  </div>

                  <div className="flex gap-3">
                    <a
                      href={project.liveUrl}
                      className="flex-1 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-semibold text-center transition-all duration-300 transform hover:scale-105"
                    >
                      Live Demo
                    </a>
                    <a
                      href={project.githubUrl}
                      className="flex-1 border border-gray-600 hover:border-gray-400 text-gray-300 hover:text-white px-4 py-2 rounded-lg text-sm font-semibold text-center transition-all duration-300 transform hover:scale-105"
                    >
                      Code
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* No Projects Message */}
          {filteredProjects.length === 0 && (
            <div className="text-center py-16">
              <div className="text-gray-500 text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-bold text-gray-400 mb-2">
                No projects found
              </h3>
              <p className="text-gray-500">
                Try selecting a different category filter.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-700">
        <div className="container mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">
            Let's Work Together
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Have a project in mind? I'd love to help bring your ideas to life
            with clean, efficient, and scalable web solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-full font-bold transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
            >
              Start a Project
            </Link>
            <a
              href="#"
              className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-full font-bold transition-all duration-300 transform hover:scale-105"
            >
              Download Resume
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProjectsPage;
