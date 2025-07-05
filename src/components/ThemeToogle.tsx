import { motion } from "motion/react";
import { useThemeStore } from "@/stores/themeStore";
import { SunIcon, MoonIcon, DesktopIcon } from "@phosphor-icons/react";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface ThemeToggleProps {
  iconSize?: number;
  align?: "start" | "center" | "end";
  className?: string;
  animated?: boolean;
  animationDelay?: number;
}

const ThemeToggle = ({
  iconSize = 24,
  align = "end",
  className = "",
  animated = false,
  animationDelay = 0,
}: ThemeToggleProps) => {
  const { mode, setMode } = useThemeStore();

  const getThemeIcon = () => {
    switch (mode) {
      case "light":
        return <SunIcon size={iconSize} weight="bold" />;
      case "dark":
        return <MoonIcon size={iconSize} weight="bold" />;
      case "system":
        return <DesktopIcon size={iconSize} weight="bold" />;
      default:
        return <DesktopIcon size={iconSize} weight="bold" />;
    }
  };

  const content = (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button
          className={`text-neutral-900 dark:text-neutral-100 hover:text-brand-500 dark:hover:text-brand-500 transition-colors ${className}`}
          aria-label="Toggle theme"
        >
          {getThemeIcon()}
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align={align}>
        <DropdownMenuCheckboxItem
          checked={mode === "light"}
          onCheckedChange={() => setMode("light")}
        >
          <SunIcon size={16} weight="bold" className="mr-2" />
          Light
        </DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem
          checked={mode === "dark"}
          onCheckedChange={() => setMode("dark")}
        >
          <MoonIcon size={16} weight="bold" className="mr-2" />
          Dark
        </DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem
          checked={mode === "system"}
          onCheckedChange={() => setMode("system")}
        >
          <DesktopIcon size={16} weight="bold" className="mr-2" />
          System
        </DropdownMenuCheckboxItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );

  if (animated) {
    return (
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: animationDelay }}
      >
        {content}
      </motion.div>
    );
  }

  return content;
};

export default ThemeToggle;
