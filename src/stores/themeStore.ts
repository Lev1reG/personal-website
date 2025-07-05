import { create } from "zustand";
import { persist } from "zustand/middleware";

type ThemeMode = "light" | "dark" | "system";

interface ThemeState {
  mode: ThemeMode;
  isDark: boolean;
  setMode: (mode: ThemeMode) => void;
  cycleTheme: () => void;
  initializeTheme: () => void;
}

export const useThemeStore = create<ThemeState>()(
  persist(
    (set, get) => ({
      mode: "system",
      isDark: false,

      setMode: (mode: ThemeMode) => {
        set({ mode });
        updateDOM(mode);
      },

      cycleTheme: () => {
        const modes: ThemeMode[] = ["light", "dark", "system"];
        const currentMode = get().mode;
        const currentIndex = modes.indexOf(currentMode);
        const nextIndex = (currentIndex + 1) % modes.length;
        const nextMode = modes[nextIndex];

        set({ mode: nextMode });
        updateDOM(nextMode);
      },

      initializeTheme: () => {
        const currentMode = get().mode;
        updateDOM(currentMode);

        if (currentMode === "system") {
          const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
          const handleChange = () => {
            if (get().mode === "system") {
              updateDOM("system");
            }
          };

          mediaQuery.addEventListener("change", handleChange);
          return () => mediaQuery.removeEventListener("change", handleChange);
        }
      },
    }),
    {
      name: "theme-storage",
      partialize: (state) => ({ mode: state.mode }),
    }
  )
);

const updateDOM = (mode: ThemeMode) => {
  const root = document.documentElement;
  let shouldBeDark = false;

  if (mode === "dark") {
    shouldBeDark = true;
  } else if (mode === "light") {
    shouldBeDark = false;
  } else if (mode === "system") {
    shouldBeDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  }

  useThemeStore.setState({ isDark: shouldBeDark });

  root.style.transition = "background-color 0.3s ease, color 0.3s ease";

  if (shouldBeDark) {
    root.classList.add("dark");
    root.classList.remove("light");
  } else {
    root.classList.add("light");
    root.classList.remove("dark");
  }
};
