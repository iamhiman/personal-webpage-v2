import { useEffect, useState } from "react";
import { THEME } from "@/utils/constants/constants";

export const useTheme = () => {
  const [theme, setTheme] = useState<string>(THEME.LIGHT);

  useEffect(() => {
    const theme = localStorage.getItem("themeValue");
    setTheme(theme === THEME.LIGHT || !theme ? THEME.LIGHT : THEME.DARK);
  }, []);

  const switchTheme = () => {
    const newTheme = theme === THEME.LIGHT ? THEME.DARK : THEME.LIGHT;
    localStorage.setItem("themeValue", newTheme);
    setTheme(newTheme);
  };

  return { theme, switchTheme };
};
