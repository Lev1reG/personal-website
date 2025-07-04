import ProfilePicture from "@/assets/Profile-Picture.png";
import TypewriterCycle from "@/components/TypeWriterCycle";
import { Button } from "@/components/ui/button";
import SocialMedia from "@/components/SocialMediaButton";

const Hero = () => {
  const phrases = [
    "Software Engineer",
    "Full Stack Developer",
    "Secure & Reliable Systems",
    "Blockchain Enthusiast",
    "Machine Learning Enthusiast",
    "Fast Learner & Diciplined",
  ];

  return (
    <article className="flex flex-col items-center justify-center space-y-5 pt-28 pb-20">
      <div className="flex flex-col items-center space-y-5">
        <img
          src={ProfilePicture}
          alt="Profile Picture of Deren Tanaphan"
          className="w-36 h-36 rounded-full border border-brand-300"
        />
        <h1 className="text-3xl font-bold text-center dark:text-neutral-100 text-neutral-900">
          <span className="text-brand-500">Hi, I'm Deren</span> - I Build Things
          That <span className="text-brand-500">Work </span> and{" "}
          <span className="text-brand-500">Last.</span>
        </h1>
      </div>
      <div className="flex flex-col items-center space-y-5">
        <h2 className="text-2xl font-bold text-center dark:text-neutral-100 text-neutral-900 min-h-[2.5rem]">
          <TypewriterCycle
            phrases={phrases}
            typingSpeed={100}
            deletingSpeed={50}
            pauseDuration={3000}
          />
        </h2>
        <p className="font-medium text-base text-center leading-snug dark:text-neutral-400 text-neutral-600">
          Passionate about blockchain, cyber security, machine learning, and
          full stack software development. I build scalable, secure, and
          data-driven systems with a focus on clean code, privacy, and
          performance. I'm driven to create resilient technologies that
          prioritize privacy, intelligence, and real-world impact.
        </p>
        <div className="flex flex-col items-center space-y-5">
          <Button
            asChild
            variant="defaultCustom"
            size="lg"
            className="font-bold text-lg"
          >
            <a
              href="https://saweria.co/levireg"
              target="_blank"
              rel="noopener noreferrer"
            >
              Buy Me a Coffee
            </a>
          </Button>
          <SocialMedia />
        </div>
      </div>
    </article>
  );
};

export default Hero;
