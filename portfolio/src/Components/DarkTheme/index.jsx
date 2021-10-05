import { useEffect, useState } from "react";
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme, GlobalStyles } from '../../theme.js';
import "./style.css"

const DarkTheme = () => {
  const [theme, setTheme] = useState("dark");
  const isDarkTheme = theme === "dark";
  const toggleTheme = () => {
    const updatedTheme = isDarkTheme ? "light" : "dark";
    setTheme(updatedTheme);
    localStorage.setItem("theme", updatedTheme);
  };
  
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia &&
      window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (savedTheme && ["dark", "light"].includes(savedTheme)) {
      setTheme(savedTheme);
    } else if (prefersDark) {
      setTheme("dark");
    }
  }, []);
  
  return (
    <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
      <>
        <GlobalStyles />
        <button className="btnDark pl-1 pr-0.25 py-0.5 bg-none" onClick={toggleTheme}>
          {isDarkTheme ?
            <span aria-label="Light mode" role="img">☀️</span> :
            <span aria-label="Dark mode" role="img">🌑</span>}
        </button>
      </>
    </ThemeProvider>
  );
}

export default DarkTheme;