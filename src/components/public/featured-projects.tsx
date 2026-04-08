"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Button } from "../ui/button";
import { featuredProjects } from "@/src/data/projects";

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
                    target="_blank"
                  >
                    View Demo
                  </Link>
                </Button>
                <Button asChild>
                  <Link
                    className="inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-medium bg-zinc-800 text-white hover:bg-zinc-700 transition-colors"
                    href={project.repoUrl}
                    target="_blank"
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
