import logo from "../assets/logo.png";
import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

export default function Navbar() {
  const [darkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem("theme");
    return saved === "dark" || (!saved && window.matchMedia("(prefers-color-scheme: dark)").matches);
  });

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark-theme");
      localStorage.setItem("theme", "dark");
    } else {
      document.body.classList.remove("dark-theme");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <nav className="fixed top-5 left-1/2 -translate-x-1/2 w-[90%] max-w-[1200px] z-[1000] px-6 py-3 bg-bg-surface/80 backdrop-blur-xl border border-text-primary/10 rounded-full transition-all duration-500 shadow-lg">
      <div className="flex items-center justify-between w-full">
        {/* LOGO */}
        <div className="cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <img src={logo} alt="Iceberg Logo" className="h-8 w-auto drop-shadow-sm" />
        </div>

        {/* NAV LINKS */}
        <div className="hidden md:flex items-center gap-8">
          {['Home', 'Solutions', 'Contact'].map((item) => (
            <a 
              key={item}
              onClick={() => scrollTo(item.toLowerCase() === 'home' ? 'hero' : item.toLowerCase())}
              className="text-sm font-medium text-text-primary opacity-70 hover:opacity-100 cursor-pointer transition-all relative group"
            >
              {item}
              <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-gradient-accent transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </div>

        {/* RIGHT SIDE */}
        <div className="flex items-center gap-4">
          <button 
            className="p-2 rounded-full text-text-primary bg-text-primary/5 hover:bg-text-primary/10 transition-all hover:rotate-12" 
            onClick={() => setDarkMode(!darkMode)}
            aria-label="Toggle Theme"
          >
            {darkMode ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          
          <button 
            className="px-6 py-2.5 bg-text-primary text-bg-main rounded-full text-sm font-bold transition-all hover:scale-105 hover:brightness-110 active:scale-95 shadow-md"
            onClick={() => scrollTo("footer")}
          >
            Get in Touch
          </button>
        </div>
      </div>
    </nav>
  );
}