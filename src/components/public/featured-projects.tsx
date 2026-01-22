"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Button } from "../ui/button";

const featuredProjects = [
  {
    id: 1,
    name: "Cognify Blog",
    image: "/projects/cognify.png",
    description:
      "A modern, responsive blog platform built with Next.js and TypeScript. Features a clean design, fast performance, and easy content management.",
    tags: ["Next js", "TypeScript", "Tailwind CSS", "Mongo DB"],
    demoUrl: "https://cognify-learn.vercel.app/",
    repoUrl: "https://github.com/mulbahoplanojames/cognify",
  },
  {
    id: 2,
    name: "Steel Core",
    image: "/projects/steal-core.png",
    description:
      "Developed a robust backend service for a logistics company. The service handles complex logistics operations and provides real-time tracking.",
    tags: ["Next js", "TypeScript", "PostgreSQL"],
    demoUrl: "https://steelcore-ec.vercel.app/",
    repoUrl: "https://github.com/mulbahoplanojames/steel-core",
  },
  {
    id: 3,
    name: "AMOA Courses",
    image: "/projects/amoa.png",
    description:
      "AMOA Courses is a robust, open-source platform designed for both educators and students to create, manage, and participate in online courses. Whether you are a teacher looking to share knowledge or a student eager to learn, AMOA Courses provides an intuitive, scalable environment for digital education. ",
    tags: ["Next js", "TypeScript", "Mongo DB"],
    demoUrl: "https://amoa-courses.vercel.app/",
    repoUrl: "https://github.com/mulbahoplanojames/amoa-courses",
  },
  {
    id: 4,
    name: "Fessel FC",
    image: "/projects/fessel.png",
    description:
      "Fessel FC is a modern football web application built for Fessel FC with Next.js and TypeScript, featuring robust authentication, MongoDB integration, and a rich UI built with Radix UI components. It's designed to provide a seamless user experience with real-time data handling and modern development practices. ",
    tags: ["Next js", "TypeScript", "Mongo DB", "Radix UI"],
    demoUrl: "https://fassel-fc.vercel.app",
    repoUrl: "https://github.com/mulbahoplanojames/fessel-fc",
  },
  {
    id: 5,
    name: "MKExpress",
    image: "/projects/mk-express.png",
    description:
      "MKExpress is an e-commerce platform built with Next.js and TypeScript, featuring robust authentication, MongoDB integration, and a rich UI built with Radix UI components. It's designed to provide a seamless user experience with real-time data handling and modern development practices. An e-commerce platform designed for small businesses, allowing them to sell their products online.",
    tags: ["Next js", "TypeScript", "Mongo DB", "Radix UI"],
    demoUrl: "https://mkexpress.vercel.app/",
    repoUrl: "https://github.com/mulbahoplanojames/mkexpress",
  },
];

export default function FeaturedProjects() {
  const [visibleProjects, setVisibleProjects] = useState(4);

  const loadMoreProjects = () => {
    setVisibleProjects((prev) => prev + 4);
  };

  return (
    <section className="space-y-10" id="projects">
      <h2 className="text-2xl font-bold border-b-2 border-gray-100 dark:border-gray-800 pb-2">
        Featured Projects
      </h2>
      <div className="grid md:grid-cols-2 gap-8">
        {featuredProjects.slice(0, visibleProjects).map((project) => (
          <div key={project.id} className="project-card">
            <div className="aspect-video w-full overflow-hidden bg-zinc-800">
              <Image
                alt={project.name}
                className="w-full h-full object-cover opacity-80"
                src={project.image || ""}
                width={1920}
                height={1080}
              />
            </div>
            <div className="py-6 flex flex-col grow space-y-4">
              <div className="space-y-2">
                <h3 className="text-xl font-bold">{project.name}</h3>
                <p className="text-sm text-zinc-400 leading-relaxed">
                  {project.description}
                </p>
              </div>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 rounded-full text-xs font-medium bg-zinc-800 text-zinc-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex gap-3 mt-auto">
                <Button asChild>
                  <Link
                    className="inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-medium bg-zinc-800 text-white hover:bg-zinc-700 transition-colors"
                    href={project.demoUrl}
                  >
                    View Demo
                  </Link>
                </Button>
                <Button asChild>
                  <Link
                    className="inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-medium bg-zinc-800 text-white hover:bg-zinc-700 transition-colors"
                    href={project.repoUrl}
                  >
                    View Code
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
      {visibleProjects < featuredProjects.length && (
        <div className="flex justify-center mt-8">
          <button
            onClick={loadMoreProjects}
            className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium transition-colors"
          >
            Load More Projects
          </button>
        </div>
      )}
    </section>
  );
}
