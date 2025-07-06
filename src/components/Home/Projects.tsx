import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "motion/react";

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
    <motion.article 
      id="projects" 
      className="flex flex-col items-center justify-center space-y-5 lg:space-y-8 py-8"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <div className="flex flex-col items-center justify-center space-y-2 lg:space-y-3">
        <h1 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-center dark:text-neutral-100">
          Projects
        </h1>
        <p className="text-base lg:text-lg font-medium text-center dark:text-neutral-400 text-neutral-600">
          Projects where I turn ideas into systems — crafted with care and
          purpose.
        </p>
      </div>
      <motion.div 
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4"
        variants={{
          hidden: { opacity: 0 },
          show: {
            opacity: 1,
            transition: {
              staggerChildren: 0.2
            }
          }
        }}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        {projects.map((project, index) => (
          <motion.div
            key={index}
            variants={{
              hidden: { opacity: 0, y: 50 },
              show: { opacity: 1, y: 0 }
            }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <ProjectCard
              title={project.title}
              description={project.description}
              href={project.href}
              technologies={project.technologies}
            />
          </motion.div>
        ))}
      </motion.div>
    </motion.article>
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
    <Card className="h-full">
      <CardHeader>
        <h2 className="text-lg lg:text-xl font-bold text-neutral-900 dark:text-neutral-100">
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
