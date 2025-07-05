import AppRouter from "@/components/AppRouter";
import { useThemeStore } from "@/stores/themeStore";
import { useEffect } from "react";

function App() {
  const initializeTheme = useThemeStore((store) => store.initializeTheme);

  useEffect(() => {
    document.body.classList.add("preload");

    initializeTheme();

    const timer = setTimeout(() => {
      document.body.classList.remove("preload");
    }, 100);

    return () => clearTimeout(timer);
  }, [initializeTheme]);

  return <AppRouter />;
}

export default App;
