"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

const Page = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 min-h-screen flex items-center justify-center relative overflow-hidden">
        {/* Background Animation */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
          <div className={`absolute top-1/3 right-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse ${isClient ? 'animation-delay-2000' : ''}`}></div>
          <div className={`absolute bottom-1/4 left-1/3 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse ${isClient ? 'animation-delay-4000' : ''}`}></div>
        </div>

        <div className="container mx-auto px-6 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            {/* Text Content */}
            <div className="flex-1 text-center lg:text-left">
              <div className="mb-6">
                <h1 className="text-5xl lg:text-7xl font-bold text-white mb-4 leading-tight">
                  Hello! I&apos;m{" "}
                  <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-pulse">
                    Sagar Ban
                  </span>
                </h1>
                <p className="text-xl lg:text-2xl text-gray-300 mb-2">
                  Full Stack Web Developer
                </p>
                <p className="text-lg text-gray-400 max-w-2xl">
                  Passionate about creating beautiful, functional, and user-friendly web experiences
                  that make a difference in people&apos;s lives.
                </p>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
                <Link
                  href="/project"
                  className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
                >
                  View My Work
                </Link>
                <Link
                  href="/contact"
                  className="border-2 border-gray-400 hover:border-white text-gray-300 hover:text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105"
                >
                  Get In Touch
                </Link>
              </div>

              {/* Social Links */}
              <div className="flex gap-6 justify-center lg:justify-start">
                <a
                  href="#"
                  className="text-gray-400 hover:text-blue-400 transition-colors duration-300 transform hover:scale-110"
                  aria-label="LinkedIn"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-gray-900 transition-colors duration-300 transform hover:scale-110"
                  aria-label="GitHub"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-blue-500 transition-colors duration-300 transform hover:scale-110"
                  aria-label="Twitter"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                  </svg>
                </a>
              </div>
            </div>

            {/* Profile Image */}
            <div className="flex-1 flex justify-center lg:justify-end">
              <div className="relative">
                <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden p-1 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 animate-pulse">
                  <div className="w-full h-full rounded-full overflow-hidden bg-gray-800">
                    <Image
                      src="/img.png"
                      alt="Sagar Ban - Web Developer"
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                </div>
                {/* Floating Elements */}
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-blue-500 rounded-full animate-bounce"></div>
                <div className={`absolute -bottom-4 -left-4 w-6 h-6 bg-purple-500 rounded-full animate-bounce ${isClient ? 'animation-delay-1000' : ''}`}></div>
                <div className={`absolute top-1/2 -left-8 w-4 h-4 bg-pink-500 rounded-full animate-bounce ${isClient ? 'animation-delay-2000' : ''}`}></div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="bg-gray-800 py-20">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Skills & Technologies</h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Here are some of the technologies I work with to bring ideas to life
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
            {[
              { name: "React", color: "text-blue-400" },
              { name: "Next.js", color: "text-white" },
              { name: "JavaScript", color: "text-yellow-400" },
              { name: "TypeScript", color: "text-blue-500" },
              { name: "Node.js", color: "text-green-400" },
              { name: "c#", color: "text-yellow-500" },
              { name: "MongoDB", color: "text-green-500" },
              { name: "PostgreSQL", color: "text-blue-600" },
              { name: "Tailwind CSS", color: "text-cyan-400" },
              { name: "Git", color: "text-orange-500" },
              { name: "php", color: "text-blue-400" },
              { name: "java", color: "text-orange-400" },
            ].map((skill, index) => (
              <div
                key={skill.name}
                className="bg-gray-700 p-6 rounded-lg text-center hover:bg-gray-600 transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
                style={isClient ? { animationDelay: `${index * 100}ms` } : {}}
              >
                <div className={`text-2xl font-bold ${skill.color} mb-2`}>
                  {skill.name}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="bg-gray-900 py-20">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-8">About Me</h2>
            <p className="text-gray-300 text-lg leading-relaxed mb-8">
              I&apos;m a passionate full-stack web developer with a love for creating innovative digital solutions.
              With expertise in modern web technologies, I enjoy turning complex problems into simple,
              beautiful, and intuitive designs. When I&apos;m not coding, you can find me exploring new technologies,
              contributing to open-source projects, or sharing knowledge with the developer community.
            </p>
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-400 mb-2">5+</div>
                <div className="text-gray-400">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-400 mb-2">3+</div>
                <div className="text-gray-400">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-pink-400 mb-2">100%</div>
                <div className="text-gray-400">Client Satisfaction</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Page;
