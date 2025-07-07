import { Badge } from "@/components/ui/badge";
import { motion } from "motion/react";

const WorkExperience = () => {
  const experiences: ExperienceProps[] = [
    {
      company: "GAMAFORCE UGM",
      position: "Lead Programmer",
      date: "December 2024 - Present",
      description:
        "As part of a new term in GAMAFORCE, I have been promoted to Lead Programmer, where I lead and coordinate the programming division in preparation for the Kontes Robot Terbang Indonesia (KRTI) 2025. My role involves guiding fellow programmers, maintaining development progress",
      href: "https://www.linkedin.com/company/gamaforce-ugm/",
      type: "Contract",
    },
    {
      company: "ArachnoVa",
      position: "Full Stack Developer",
      date: "December 2023 - Present",
      description:
        "ArachnoVa is a community-based business by DTETI FT UGM (Department of Electrical Engineering and Information Engineering, Faculty of Engineering, University of Gadjah Mada) students which offers web design and development services to the customers. I work as a freelance Full Stack Developer at ArachnoVa, a community-based venture led by DTETI FT UGM students. Here, I'm tasked with developing and designing various web projects, utilizing expertise in both front-end and back-end technologies.",
      href: "https://www.arachnova.id/",
      type: "Freelance",
    },
    {
      company: "VhiWEB",
      position: "Backend Developer",
      date: "January 2025 - February 2025",
      description:
        "Developed and enhanced the event management and RSVP system of Munio (Community Platform), digital product of VhiWEB",
      href: "https://vhiweb.com",
      type: "Internship",
    },
    {
      company: "GAMAFORCE UGM",
      position: "Hardware Programmer",
      date: "December 2023 - December 2024",
      description:
        "I joined at Khageswara, Propulsion System Subteam. In this subteam, i focused to research on Electronic Speed Control Controller. An Electronic Speed Controller (ESC) in a UAV manages and regulates the speed of the electric motor driving the propellers.",
      href: "https://www.linkedin.com/company/gamaforce-ugm/",
      type: "Contract",
    },
    {
      company: "Universitas Gadjah Mada",
      position: "Single Variable Calculus Tutorial Assistant",
      date: "August 2023 - December 2023",
      description:
        "As a Tutorial Assistant, I help the students who take this course to more understand and be ready for exams.",
      href: "https://sarjana.jteti.ugm.ac.id/",
      type: "Part-Time",
    },
  ];

  return (
    <motion.section
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
      <motion.div
        className="w-full space-y-4"
        variants={{
          hidden: { opacity: 0 },
          show: {
            opacity: 1,
            transition: {
              staggerChildren: 0.2,
            },
          },
        }}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            variants={{
              hidden: { opacity: 0, y: 50 },
              show: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <Experience
              company={exp.company}
              position={exp.position}
              date={exp.date}
              description={exp.description}
              href={exp.href}
              type={exp.type}
            />
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
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
    <article
      className="w-full flex flex-col justify-center items-center lg:items-start space-y-2"
      itemScope
      itemType="https://schema.org/WorkExperience"
    >
      <div className="w-full flex lg:flex-row flex-col justify-between items-center space-y-2 lg:space-y-0">
        <div className="flex lg:flex-row flex-col items-center space-y-2 lg:space-y-0 lg:space-x-4">
          {href ? (
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg lg:text-2xl font-bold text-neutral-900 dark:text-neutral-100 hover:underline"
              itemProp="worksFor"
              itemScope
              itemType="https://schema.org/Organization"
            >
              <span itemProp="name">{company}</span>
            </a>
          ) : (
            <h2
              className="text-lg lg:text-2xl font-bold text-neutral-900 dark:text-neutral-100"
              itemProp="worksFor"
              itemScope
              itemType="https://schema.org/Organization"
            >
              <span itemProp="name">{company}</span>
            </h2>
          )}

          <Badge variant="default" itemProp="employmentType">
            {type}
          </Badge>
        </div>
        <time
          className="text-xs lg:text-sm font-medium text-center dark:text-neutral-300 text-neutral-700"
          itemProp="datePublished"
        >
          {date}
        </time>
      </div>
      <h3
        className="text-sm lg:text-base font-medium text-center dark:text-neutral-300 text-neutral-700"
        itemProp="jobTitle"
      >
        {position}
      </h3>
      <p
        className="text-xs lg:text-sm text-center lg:text-left dark:text-neutral-400 text-neutral-600"
        itemProp="description"
      >
        {description}
      </p>
    </article>
  );
};

export default WorkExperience;
