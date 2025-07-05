import { Badge } from "@/components/ui/badge";

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
    <article className="flex flex-col items-center justify-center space-y-5 py-8">
      <h1 className="text-3xl font-bold text-center dark:text-neutral-100">
        Work Experience
      </h1>
      <div className="space-y-4">
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
    </article>
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
    <div className="w-full flex flex-col justify-center items-center space-y-2">
      <div className="flex flex-col justify-between items-center space-y-2">
        <div className="flex flex-col items-center space-y-2">
          {href ? (
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg font-bold text-neutral-900 dark:text-neutral-100 hover:underline"
            >
              {company}
            </a>
          ) : (
            <h2 className="text-lg font-bold text-neutral-900 dark:text-neutral-100">
              {company}
            </h2>
          )}

          <Badge variant="default">{type}</Badge>
        </div>
        <p className="text-xs font-medium text-center dark:text-neutral-300 text-neutral-700">
          {date}
        </p>
      </div>
      <h3 className="text-sm font-medium text-center dark:text-neutral-300 text-neutral-700">
        {position}
      </h3>
      <p className="text-xs text-center dark:text-neutral-400 text-neutral-600">
        {description}
      </p>
    </div>
  );
};

export default WorkExperience;
