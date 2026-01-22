import { experiences } from "@/src/data/experience";

export default function Experience() {
  return (
    <>
      <section className="space-y-10" id="experience">
        <h2 className="text-2xl font-bold border-b-2 border-gray-100 dark:border-gray-800 pb-2">
          Experience
        </h2>
        <div className="space-y-12">
          {experiences.map((experience, index) => (
            <div key={index}>
              <div className="relative pl-8 border-l-2 border-gray-100 dark:border-gray-800">
                <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-primary border-4 border-white dark:border-gray-900"></div>
                <div className="flex flex-wrap justify-between items-baseline mb-4">
                  <h3 className="text-xl font-bold">
                    {experience.title}{" "}
                    <span className="font-semibold text-blue-700">
                      • {experience.company}
                    </span>
                  </h3>
                  <span className="text-sm font-medium text-slate-500">
                    {experience.period}
                  </span>
                </div>
                <p className="italic text-slate-600 dark:text-slate-400 mb-4">
                  {experience.description}
                </p>
                <ul className="space-y-2 list-disc list-outside pl-4 text-slate-700 dark:text-slate-300">
                  {experience.responsibilities.map((responsibility, index) => (
                    <li key={index}>{responsibility}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
