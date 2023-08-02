import { createContext, useState, useEffect, useContext } from "react";
import { useUserContext } from "./user.context";
import useLocalStorage from "~/hooks/useLocalStorage";

type ThemeType = "light" | "dark" | "system";

interface IThemeContext {
    theme: ThemeType;
    toggleTheme: () => void;
};

const ThemeContext = createContext<IThemeContext>({
  theme: "light" as ThemeType, // | "order66",
  toggleTheme: () => {},
});

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  // const [theme, setTheme] = useState<ThemeType>(
    // JSON.parse(localStorage.getItem("theme")!) ?? "dark"
  // ); //!
  const [theme, setTheme] = useLocalStorage<ThemeType>("theme", "dark");

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  /* useEffect(() => {
    if (theme) {
      localStorage.setItem("theme", JSON.stringify(theme));
    }
  }, [theme]); */

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContext;

export const useTheme = () => useContext(ThemeContext);