const experiences = [
  {
    title: "IT Specialist",
    company: "Actions For Collective Change (ACC) Non-Profit Organization",
    period: "July 2025 – Present",
    description:
      "Provide technical and IT support for a non-profit organization operating across multiple regions, supporting digital operations and organizational efficiency.",
    responsibilities: [
      "Manage and support IT systems, software tools, and digital infrastructure used for organizational programs and operations.",
      "Assist in the development, maintenance, and optimization of internal systems and web-based platforms.",
      "Provide technical troubleshooting, user support, and system configuration for staff and collaborators.",
      "Support technology-driven initiatives that enhance communication, data management, and operational impact across regions.",
    ],
  },
  {
    title: "Software Developer Intern",
    company: "KB21 Ltd (The GYM Program)",
    period: "September 2025 – December 2025",
    description:
      "Contributed to real-world software development projects as part of The GYM traineeship program, focusing on practical skills, discipline, and professional growth.",
    responsibilities: [
      "Participated in hands-on software development projects, contributing to application features and system improvements.",
      "Applied programming fundamentals and modern development practices to build and enhance software solutions.",
      "Collaborated with mentors and team members in an agile learning environment, following structured development workflows.",
      "Demonstrated strong commitment, focus, and consistency during an initial trial period, meeting performance expectations for continuation in the program.",
    ],
  },
  {
    title: "Software Developer Intern (IoT & Software Development)",
    company: "IoT PIONEERS Ltd",
    period: "June 2025 – August 2025",
    description:
      "Completed an intensive internship program focused on software development and Internet of Things (IoT) solutions, combining hands-on projects with real-world problem solving.",
    responsibilities: [
      "Trained in core software development concepts, including system design, programming fundamentals, and practical application development.",
      "Designed and implemented IoT-based solutions integrating hardware components, sensors, and software logic.",
      "Worked on data collection, processing, and visualization from IoT devices to support real-time monitoring and decision-making.",
      "Collaborated in team-based projects, applying debugging, testing, and documentation best practices throughout the development lifecycle.",
    ],
  },
];

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
                    <span className="text-primary font-semibold text-blue-500">
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
