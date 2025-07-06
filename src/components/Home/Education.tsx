import { motion } from "framer-motion";

const Education = () => {
  const experiences: ExperienceProps[] = [
    {
      university: "Universitas Gadjah Mada",
      degree: "Bachelor Degree in Information Engineering",
      date: "2022 - 2026 (Expected)",
      href: "https://ugm.ac.id/id/prodi/teknologi-informasi/",
    },
  ];

  return (
    <motion.article
      id="education"
      className="flex flex-col items-center justify-center space-y-5 lg:space-y-8 py-8 lg:py-12"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true, margin: "-100px" }}
    >
      <h1 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-center dark:text-neutral-100">
        Education
      </h1>
      <div className="w-full space-y-4">
        {experiences.map((exp, index) => (
          <Experience
            key={index}
            university={exp.university}
            degree={exp.degree}
            date={exp.date}
            href={exp.href}
          />
        ))}
      </div>
    </motion.article>
  );
};

interface ExperienceProps {
  university: string;
  degree: string;
  date: string;
  href?: string;
}

const Experience = ({ university, degree, date, href }: ExperienceProps) => {
  return (
    <div className="flex flex-col justify-center items-center lg:items-start space-y-2">
      <div className="w-full flex flex-col lg:flex-row lg:justify-between items-center space-y-2 lg:space-y-0">
        <h2 className="text-lg lg:text-2xl font-bold text-center text-neutral-900 dark:text-neutral-100">
          {href ? (
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-900 dark:text-neutral-100 hover:underline"
            >
              {university}
            </a>
          ) : (
            university
          )}
        </h2>
        <p className="text-xs lg:text-sm font-medium dark:text-neutral-400 text-neutral-600 text-center">
          {date}
        </p>
      </div>
      <p className="text-sm lg:text-base font-medium dark:text-neutral-300 text-neutral-700 text-center">
        {degree}
      </p>
    </div>
  );
};

export default Education;
