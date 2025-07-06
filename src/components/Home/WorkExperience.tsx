import { Badge } from "@/components/ui/badge";
import { motion } from "motion/react";

const WorkExperience = () => {
  const experiences: ExperienceProps[] = [
    {
      company: "VhiWEB",
      position: "Backend Developer",
      date: "January 2025 - February 2025",
      description:
        "Developed and enhanced the event management and RSVP system of Munio (Community Platform), digital product of VhiWEB",
      href: "https://vhiweb.com",
      type: "Internship",
    },
  ];

  return (
    <motion.article
      id="workexperience"
      className="flex flex-col items-center justify-center space-y-5 lg:space-y-8 py-8 lg:py-12"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true, margin: "-100px" }}
    >
      <h1 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-center dark:text-neutral-100">
        Work Experience
      </h1>
      <div className="w-full space-y-4">
        {experiences.map((exp, index) => (
          <Experience
            key={index}
            company={exp.company}
            position={exp.position}
            date={exp.date}
            description={exp.description}
            href={exp.href}
            type={exp.type}
          />
        ))}
      </div>
    </motion.article>
  );
};

interface ExperienceProps {
  company: string;
  position: string;
  date: string;
  description: string;
  href?: string;
  type: string;
}

const Experience = ({
  company,
  position,
  date,
  description,
  href,
  type,
}: ExperienceProps) => {
  return (
    <div className="w-full flex flex-col justify-center items-center lg:items-start space-y-2">
      <div className="w-full flex lg:flex-row flex-col justify-between items-center space-y-2 lg:space-y-0">
        <div className="flex lg:flex-row flex-col items-center space-y-2 lg:space-y-0 lg:space-x-4">
          {href ? (
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg lg:text-2xl font-bold text-neutral-900 dark:text-neutral-100 hover:underline"
            >
              {company}
            </a>
          ) : (
            <h2 className="text-lg lg:text-2xl font-bold text-neutral-900 dark:text-neutral-100">
              {company}
            </h2>
          )}

          <Badge variant="default">{type}</Badge>
        </div>
        <p className="text-xs lg:text-sm font-medium text-center dark:text-neutral-300 text-neutral-700">
          {date}
        </p>
      </div>
      <h3 className="text-sm lg:text-base font-medium text-center dark:text-neutral-300 text-neutral-700">
        {position}
      </h3>
      <p className="text-xs lg:text-sm text-center lg:text-left dark:text-neutral-400 text-neutral-600">
        {description}
      </p>
    </div>
  );
};

export default WorkExperience;
