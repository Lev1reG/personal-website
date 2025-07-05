import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Projects = () => {
  const projects = [
    {
      title: "Munio",
      description:
        "A community platform for event management and RSVP, developed as a digital product of VhiWEB.",
      href: "https://munio.vhiweb.com",
      technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
    },
    {
      title: "Portfolio Website",
      description:
        "My personal portfolio website showcasing my projects and skills.",
      href: "https://levireg.com",
      technologies: ["React", "Next.js", "Tailwind CSS"],
    },
    {
      title: "Portfolio Website",
      description:
        "My personal portfolio website showcasing my projects and skills.",
      href: "https://levireg.com",
      technologies: ["React", "Next.js", "Tailwind CSS"],
    },
  ];

  return (
    <article className="flex flex-col items-center justify-center space-y-5 py-8">
      <div className="flex flex-col items-center justify-center space-y-2">
        <h1 className="text-3xl font-bold text-center dark:text-neutral-100">
          Projects
        </h1>
        <p className="text-base font-medium text-center dark:text-neutral-400 text-neutral-600">
          Projects where I turn ideas into systems — crafted with care and
          purpose.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            description={project.description}
            href={project.href}
            technologies={project.technologies}
          />
        ))}
      </div>
    </article>
  );
};

interface ProjectCardProps {
  title: string;
  description: string;
  href?: string;
  technologies: string[];
}

const ProjectCard = ({
  title,
  description,
  href,
  technologies,
}: ProjectCardProps) => {
  return (
    <Card>
      <CardHeader>
        <h2 className="text-lg font-bold text-neutral-900 dark:text-neutral-100">
          {href ? (
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-900 dark:text-neutral-100 hover:underline"
            >
              {title}
            </a>
          ) : (
            title
          )}
        </h2>
      </CardHeader>
      <CardContent>
        <p className="text-xs text-neutral-500">{description}</p>
      </CardContent>
      <CardFooter className="mt-auto">
        <div className="flex flex-wrap gap-1">
          {technologies.map((tech, index) => (
            <Badge key={index} variant="outline" className="text-xs">
              {tech}
            </Badge>
          ))}
        </div>
      </CardFooter>
    </Card>
  );
};

export default Projects;
