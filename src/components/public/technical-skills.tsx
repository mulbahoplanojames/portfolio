import Image from "next/image";
import { Card } from "../ui/card";

const languages = [
  {
    name: "Python",
    icon: "/python.png",
  },
  {
    name: "JavaScript",
    icon: "/javascript.png",
  },
  {
    name: "TypeScript",
    icon: "/typescript.png",
  },
];

const toolsAndTechnologies = [
  {
    name: "React Js",
    icon: "/react.png",
  },
  {
    name: "Next Js",
    icon: "/nextjs.png",
  },
  {
    name: "Git",
    icon: "/git.png",
  },
  {
    name: "GitHub",
    icon: "/github.png",
  },
  {
    name: "Zustand",
    icon: "/zustand.svg",
  },
  {
    name: "Git",
    icon: "/git.png",
  },
  {
    name: "Tailwind CSS",
    icon: "/tailwind.png",
  },
  {
    name: "Figma",
    icon: "/figma.png",
  },
  {
    name: "Jest",
    icon: "/jest.png",
  },
  {
    name: "ESLint",
    icon: "/eslent.png",
  },
];

export default function TechnicalSkills() {
  return (
    <section className="space-y-10" id="skills">
      <h2 className="text-2xl font-bold border-b-2 border-gray-100 dark:border-gray-800 pb-2">
        Technical Skills
      </h2>
      <div className="space-y-8">
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-4">
            Languages
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {languages.map((language) => (
              <Card
                key={language.name}
                className="flex flex-row items-center justify-start gap-3 py-2 px-4 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-sm"
              >
                <div className="">
                  <Image
                    alt={language.name}
                    className="w-7 h-7"
                    src={language.icon}
                    width={28}
                    height={28}
                  />
                </div>

                <span className="font-medium text-sm">{language.name}</span>
              </Card>
            ))}
          </div>
        </div>
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-4">
            Tools &amp; Technologies
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {toolsAndTechnologies.map((tool) => (
              <Card
                key={tool.name}
                className="flex flex-row items-center justify-start  gap-3 px-4 py-2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-sm"
              >
                <div>
                  <Image
                    alt={tool.name}
                    className="w-7 h-7"
                    src={tool.icon}
                    width={28}
                    height={28}
                  />
                </div>
                <span className="font-medium text-sm">{tool.name}</span>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
