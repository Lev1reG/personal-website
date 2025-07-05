import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Link } from "react-router-dom";
import { useThemeStore } from "@/stores/themeStore";
import { SunIcon, MoonIcon, DesktopIcon } from "@phosphor-icons/react";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const { mode, setMode } = useThemeStore();

  const toogleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const getThemeIcon = () => {
    switch (mode) {
      case "light":
        return <SunIcon size={32} weight="bold" />;
      case "dark":
        return <MoonIcon size={32} weight="bold" />;
      case "system":
        return <DesktopIcon size={32} weight="bold" />;
      default:
        return <DesktopIcon size={32} weight="bold" />;
    }
  };

  const menuItems = [
    { name: "Home", path: "#" },
    { name: "Experience", path: "#" },
    { name: "Projects", path: "#" },
    { name: "Journey", path: "#" },
  ];

  return (
    <header className="dark:bg-neutral-900 bg-neutral-100 border-b-2 border-neutral-400">
      <nav className="container mx-auto p-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-brand-500">Deren T.</h1>

        {/* Hamburger Menu for Mobile */}
        <button
          onClick={toogleMenu}
          className="md:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1"
          aria-label="Toggle menu"
        >
          <motion.span
            animate={{
              rotate: isMenuOpen ? 45 : 0,
              y: isMenuOpen ? 6 : 0,
            }}
            transition={{ duration: 0.3 }}
            className="block w-6 h-0.5 dark:bg-neutral-100 bg-neutral-900"
          />
          <motion.span
            animate={{
              opacity: isMenuOpen ? 0 : 1,
            }}
            transition={{ duration: 0.2 }}
            className="block w-6 h-0.5 dark:bg-neutral-100 bg-neutral-900"
          />
          <motion.span
            animate={{
              rotate: isMenuOpen ? -45 : 0,
              y: isMenuOpen ? -6 : 0,
            }}
            transition={{ duration: 0.3 }}
            className="block w-6 h-0.5 dark:bg-neutral-100 bg-neutral-900"
          />
        </button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden overflow-hidden"
          >
            <motion.div
              initial={{ y: -20 }}
              animate={{ y: 0 }}
              exit={{ y: -20 }}
              transition={{ duration: 0.3, delay: 0.1 }}
              className="flex flex-col items-center space-y-4 pt-4 pb-2"
            >
              {menuItems.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + index * 0.05 }}
                >
                  <Link
                    to={item.path}
                    className="text-base font-bold dark:text-neutral-100 text-neutral-900 dark:hover:text-brand-500 hover:text-brand-500 transition-colors block"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}

              {/* Theme Toggle Button */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 + menuItems.length * 0.05 }}
              >
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <button className="text-neutral-900 dark:text-neutral-100 hover:text-brand-500 dark:hover:text-brand-500 transition-colors">
                      {getThemeIcon()}
                    </button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
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
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
