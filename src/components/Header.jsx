import { useState, useEffect } from "react";

const Header = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  useEffect(() => {
    const savedTheme = localStorage.getItem("darkMode") === "true";
    setDarkMode(savedTheme);
    if (savedTheme) {
      document.documentElement.classList.add("dark");
    }
  }, []);

  const toggleDarkMode = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    localStorage.setItem("darkMode", newMode);
    if (newMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  return (
    <nav
      id="navbar"
      className={`fixed top-0 left-0 w-full text-white transition-transform duration-300 flex items-center justify-between p-4 bg-inherit dark:bg-gray-800 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="text-xl font-bold text-gray-800 dark:text-gray-100">
        <a href="#" className="cursor-pointer">
          Sha-Shank
        </a>
      </div>
      <ul className="flex items-center space-x-6">
        <li>
          <a
            href="#"
            className="text-gray-800 dark:text-gray-100 hover:underline hidden md:block"
          >
            Home
          </a>
        </li>
        <li>
          <a
            href="#"
            className="text-gray-800 dark:text-gray-100 hover:underline hidden md:block"
          >
            About
          </a>
        </li>
        <li>
          <a
            href="#"
            className="text-gray-800 dark:text-gray-100 hover:underline hidden md:block"
          >
            Contact
          </a>
        </li>
        <li>
          <button
            onClick={toggleDarkMode}
            className="p-2 text-gray-800 bg-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-100"
          >
            {darkMode ? "☀️" : "🌙"}
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
