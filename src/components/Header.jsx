import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { clearUser } from "../features/formData/authSlice";
import { auth } from "../utils/firebase";
import { FiLogOut } from "react-icons/fi";
import { FaUserPlus, FaSignInAlt, FaSignOutAlt } from "react-icons/fa";

const Header = ({ isSignInForm, toggleSignInForm }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.auth.user);

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

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        dispatch(clearUser());
        console.log("User signed out");
        navigate("/login");
      })
      .catch((error) => {
        console.error("Error signing out:", error.message);
      });
  };

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
    <>
      <nav
        id="navbar"
        className={`z-10 fixed top-0 left-0 w-full text-white transition-transform duration-300 flex items-center justify-between p-4 bg-inherit dark:bg-gray-800 ${
          isVisible ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="text-xl font-bold dark:bg-gradient-to-r dark:from-purple-400 dark:via-pink-500 dark:to-red-500 dark:bg-clip-text dark:text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent">
          <Link to={user ? "/main" : "/login"} className="cursor-pointer">
            Sha-Shank
          </Link>
        </div>
        <ul className="flex items-center space-x-6">
          {!user && (
            <>
              <li>
                <Link to="/login">
                  <button
                    onClick={toggleSignInForm}
                    className="text-gray-800 dark:text-gray-100 hover:underline"
                  >
                    {isSignInForm ? (
                      <FaUserPlus size={25} />
                    ) : (
                      <FaSignInAlt size={25} />
                    )}
                  </button>
                </Link>
              </li>
            </>
          )}

          {user && (
            <>
              <li>
                <Link
                  to="/home"
                  className="text-gray-800 dark:text-gray-100 hover:underline hidden md:block"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-gray-800 dark:text-gray-100 hover:underline hidden md:block"
                >
                  About
                </Link>
              </li>
            </>
          )}
          <li>
            <Link
              to="/contact"
              className="text-gray-800 dark:text-gray-100 hover:underline hidden md:block"
            >
              Contact
            </Link>
          </li>
          <li>
            <button
              onClick={toggleDarkMode}
              className="p-2 text-gray-800 bg-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-100"
            >
              {darkMode ? "☀️" : "🌙"}
            </button>
          </li>
          {user && (
            <>
              <li>
                <button
                  onClick={handleSignOut}
                  className="p-1 text-gray-800 bg-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-100"
                >
                  <FaSignOutAlt size={25} />
                </button>
              </li>
            </>
          )}
        </ul>
      </nav>
    </>
  );
};

export default Header;
