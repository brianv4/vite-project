import React, { useEffect, useState } from "react";
import About from "./components/About";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import Services from "./components/Services";
import Works from "./components/Works";

function App() {
  const [theme, setTheme] = useState(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }, []);

  const handleThemeSwitch = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  return (
    <>
      <button type="button" onClick={handleThemeSwitch} className="fixed z-10 right-0 top-20 mr-5 bg-transparent text-lg p-1 rounded-md">
        {theme === "dark" ? "🌙" : "🌞"}
      </button>
      <div className="font-inter bg-white dark:bg-slate-900">
        <Navbar />
        <div className="max-w-5xl mx-auto w-11/12">
          <HeroSection />
          <Services />
          <Experience />
          <Works />
          <About />
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
