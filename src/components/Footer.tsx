import {
  EnvelopeSimpleIcon,
  GithubLogoIcon,
  InstagramLogoIcon,
  LinkedinLogoIcon,
} from "@phosphor-icons/react";
import SocialMediaButton from "@/components/SocialMediaButton";

const Footer = () => {
  const socialLinks = [
    {
      href: "https://github.com/Lev1reG",
      icon: GithubLogoIcon,
    },
    {
      href: "https://www.linkedin.com/in/derentanaphan/",
      icon: LinkedinLogoIcon,
    },
    {
      href: "https://www.instagram.com/derentanaphan_/",
      icon: InstagramLogoIcon,
    },
    {
      href: "mailto:fyordderen@gmail.com",
      icon: EnvelopeSimpleIcon,
    },
  ];

  return (
    <footer className="dark:bg-neutral-900 bg-neutral-100 border-t-2 border-neutral-400">
      <div className="container mx-auto px-4 py-6 flex flex-col items-center space-y-5">
        <h1 className="text-2xl font-bold text-brand-500 text-center">
          Deren Tanaphan
        </h1>
        <p className="text-sm font-bold dark:text-neutral-100 text-neutral-900 text-center">
          Software Engineer | Blockchain | Cybersecurity | Machine Learning
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          {socialLinks.map((link, index) => (
            <SocialMediaButton key={index} href={link.href} icon={link.icon} />
          ))}
        </div>
        <p className="text-xs text-neutral-500 text-center">
          © {new Date().getFullYear()} Deren Tanaphan. Buy me a coffee{" "}
          <a
            href="https://saweria.co/levireg"
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand-700 hover:underline"
          >
            here
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
