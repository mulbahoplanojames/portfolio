import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="grid md:grid-cols-12 gap-10 items-start" id="about">
      <div className="md:col-span-4">
        <div className="aspect-square relative rounded-2xl overflow-hidden bg-gray-200 dark:bg-gray-800 border-4 border-white dark:border-gray-700 shadow-xl">
          <Image
            alt="Oplano's Profile Picture"
            className="w-full h-full object-cover grayscale contrast-125"
            src="/oplano-james.png"
            fill
          />
        </div>
      </div>
      <div className="md:col-span-8 space-y-6">
        <div className="flex justify-between items-start">
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight">
            Hello, I&apos;m Oplano
          </h1>
          <div className="flex gap-4">
            <Link
              target="_blank"
              className="text-slate-600 dark:text-slate-400 hover:text-primary transition-colors"
              href="https://github.com/mulbahoplanojames"
            >
              <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path>
              </svg>
            </Link>
            <Link
              target="_blank"
              className="text-slate-600 dark:text-slate-400 hover:text-primary transition-colors"
              href="https://www.linkedin.com/in/oplano-james-mulbah/"
            >
              <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.041-1.416-4.041-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"></path>
              </svg>
            </Link>
          </div>
        </div>
        <div className="prose prose-slate dark:prose-invert max-w-none text-lg">
          <p>
            As a{" "}
            <span className="font-semibold  text-blue-700">
              Frontend Developer
            </span>{" "}
            based in <span className=" font-medium text-blue-700">Rwanda</span>,
            I build modern, responsive, and scalable user interfaces that
            translate complex requirements into intuitive digital experiences. I
            focus on writing clean, maintainable code and creating reusable
            components that enable teams to collaborate efficiently and ship
            high-quality products.
          </p>
          <p className="pt-4">
            Outside of my day-to-day work, I enjoy exploring emerging frontend
            technologies and design patterns that help me create applications
            that are fast, reliable, and accessible to everyone.
          </p>
        </div>
        <div className="flex flex-wrap gap-2">
          <span className="px-4 py-1.5 bg-gray-800 text-white dark:bg-gray-700 text-xs font-semibold rounded-md">
            Component Architecture
          </span>
          <span className="px-4 py-1.5 bg-gray-800 text-white dark:bg-gray-700 text-xs font-semibold rounded-md">
            Accessible Design
          </span>
          <span className="px-4 py-1.5 bg-gray-800 text-white dark:bg-gray-700 text-xs font-semibold rounded-md">
            Performance Optimization
          </span>
        </div>
      </div>
    </section>
  );
}
