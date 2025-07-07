import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "motion/react";

const Projects = () => {
  const projects: ProjectCardProps[] = [
    {
      title: "Legal Kreatif",
      description: "Website for promoting Legal Kreatif services",
      href: "https://www.legalkreatif.id/",
      technologies: [
        "Next.js",
        "Sanity",
        "Tailwind CSS",
        "Express.js",
        "MongoDB",
      ],
    },
    {
      title: "Management's Event 19",
      description:
        "Website for promoting & competition registration of Management's Event held by FEB UGM",
      href: "https://www.meugm.com/",
      technologies: [
        "Vite",
        "React.js",
        "TypeScript",
        "Tailwind CSS",
        "Express.js",
        "Midtrans",
      ],
    },
    {
      title: "Lustrum DTETI XII",
      description:
        "Website of Lustrum DTETI, celebration of the 5th Anniversary of the Department of Electrical Engineering and Information Technology, Faculty of Engineering, Universitas Gadjah Mada.",
      technologies: ["Next.js", "Tailwind CSS"],
    },
    {
      title: "PT Difa Mahakarya",
      description:
        "Company website (PT Difa Mahakarya) that showcasing one of their product called Difa Soil Stabilizer",
      href: "https://difa.co/",
      technologies: [
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "Leaflet",
        "Strapi",
      ],
    },
    {
      title: "KairosAI",
      description:
        "KairosAI is a web-based scheduling assistant that leverages artificial intelligence to simplify and automate event planning. ",
      href: "https://github.com/Lev1reG/KairosAI",
      technologies: [
        "Vite",
        "React.js",
        "Docker",
        "Go-Chi",
        "Tailwind CSS",
        "PostgreSQL",
      ],
    },
    {
      title: "dApp Voting",
      description:
        "Decentralized voting application to ensure transparency & immutability",
      href: "https://github.com/Lev1reG/system-dapp-voting",
      technologies: [
        "Next.js",
        "Tailwind CSS",
        "shadcn/ui",
        "TypeScript",
        "Wagmi",
        "RainbowKit",
        "Express.js",
        "Solidity",
        "Foundry",
      ],
    },
    {
      title: "Pokegama",
      description: "Mobile app for tracking UGM's facilities",
      href: "https://github.com/Lev1reG/Pokegama",
      technologies: ["Kotlin", "Firebase", "Mapbox"],
    },
    {
      title: "Booknest",
      description: "Web application for managing & borrowing book collections",
      href: "https://fe-final-project-paw10.vercel.app/",
      technologies: ["Next.js", "Tailwind CSS", "Express.js", "MongoDB"],
    },
    {
      title: "LaLoChain",
      description:
        "Decentralized real-world asset (RWA) tokenization platform focused on landlord-tenancy revenue, particularly for properties like hotels and rentals.",
      href: "https://github.com/ChaiNova-id/Web-LaLoChain",
      technologies: [
        "Next.js",
        "Tailwind CSS",
        "TypeScript",
        "Ethers.js",
        "Solidity",
        "Foundry",
      ],
    },
  ];

  return (
    <motion.section
      id="projects"
      className="flex flex-col items-center justify-center space-y-5 lg:space-y-8 py-8"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true, margin: "-100px" }}
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
              staggerChildren: 0.2,
            },
          },
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
              show: { opacity: 1, y: 0 },
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
    </motion.section>
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
    <article
      className="h-full"
      itemScope
      itemType="https://schema.org/SoftwareApplication"
    >
      <Card className="h-full">
        <CardHeader>
          <h2 className="text-lg lg:text-xl font-bold text-neutral-900 dark:text-neutral-100">
            {href ? (
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-900 dark:text-neutral-100 hover:underline"
                itemProp="name"
                aria-label={`Visit ${title} project`}
              >
                {title}
              </a>
            ) : (
              <span itemProp="name">{title}</span>
            )}
          </h2>
        </CardHeader>
        <CardContent>
          <p className="text-xs text-neutral-500" itemProp="description">
            {description}
          </p>
        </CardContent>
        <CardFooter className="mt-auto">
          <div className="flex flex-wrap gap-1">
            {technologies.map((tech, index) => (
              <Badge
                key={index}
                variant="outline"
                className="text-xs"
                itemProp="techStack"
              >
                {tech}
              </Badge>
            ))}
          </div>
        </CardFooter>
      </Card>
    </article>
  );
};

export default Projects;
