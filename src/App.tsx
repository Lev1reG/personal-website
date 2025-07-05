import AppRouter from "@/components/AppRouter";
import { useThemeStore } from "@/stores/themeStore";
import { useEffect } from "react";

function App() {
  const initializeTheme = useThemeStore((store) => store.intializeTheme);

  useEffect(() => {
    initializeTheme();
  }, [initializeTheme]);

  return <AppRouter />;
}

export default App;
