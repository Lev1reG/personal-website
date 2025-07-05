import type { Icon } from "@phosphor-icons/react";
import { Button } from "./ui/button";

interface SocialMediaButtonProps {
  href: string;
  icon: Icon;
}

const SocialMediaButton = ({
  href,
  icon: IconComponent,
}: SocialMediaButtonProps) => {
  return (
    <Button asChild size="icon" variant="outlineCustom">
      <a href={href} target="_blank" rel="noopener noreferrer">
        <IconComponent weight="bold" size={25} />
      </a>
    </Button>
  );
};

export default SocialMediaButton;
