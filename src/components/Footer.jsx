import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Footer = () => {
  const user = useSelector((state) => state.auth.user);

  return (
    <>
      {user && (
        <footer className="dark:bg-gray-900 bg-gray-700 text-gray-300 py-10">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-between gap-y-8">
              <div className="w-full md:w-1/3">
                <h2 className="text-2xl font-bold bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent mb-3">
                  Sha-Shank
                </h2>
                <p className="text-gray-300">
                  Your Trusted Source for Quality Products! Delivering quality
                  and excellence since 2020.
                </p>
              </div>

              <div className="w-full md:w-1/3">
                <h3 className="text-lg font-semibold text-white mb-3">
                  Quick Links
                </h3>
                <ul className="space-y-2">
                  <li>
                    <Link
                      to="/home"
                      className="text-gray-300 hover:text-white transition"
                    >
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/about"
                      className="text-gray-300 hover:text-white transition"
                    >
                      About
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/contact"
                      className="text-gray-300 hover:text-white transition"
                    >
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="w-full md:w-1/3">
                <h3 className="text-lg font-semibold text-white mb-3">
                  Follow Us
                </h3>
                <div className="flex space-x-4 flex-wrap">
                  <Link
                    to="https://www.facebook.com/shashank.musale.37?mibextid=ZbWKwL"
                    className="flex items-center text-gray-300 hover:text-white transition"
                    target="_blank"
                  >
                    <i className="fab fa-facebook-f m-2"></i>
                    Facebook
                  </Link>
                  <Link
                    to="https://x.com/ShashankMusale1"
                    className="flex items-center text-gray-300 hover:text-white transition"
                    target="_blank"
                  >
                    <i className="fab fa-twitter m-2"></i>
                    Twitter
                  </Link>
                  <Link
                    to="https://www.instagram.com/shashank_.0712?utm_source=qr&igsh=OGlnc2p2eHd0MDY5"
                    className="flex items-center text-gray-300 hover:text-white transition"
                    target="_blank"
                  >
                    <i className="fab fa-instagram m-2"></i>
                    Instagram
                  </Link>
                  <Link
                    to="https://www.linkedin.com/in/shashank-musale-726b6021b"
                    className="flex items-center text-gray-300 hover:text-white transition"
                    target="_blank"
                  >
                    <i className="fab fa-linkedin-in m-2"></i>
                    LinkedIn
                  </Link>
                </div>
              </div>
            </div>

            <div className="mt-8 text-center text-gray-400">
              <p>
                &copy; {new Date().getFullYear()} Sha-Shank. All rights
                reserved.
              </p>
            </div>
          </div>
        </footer>
      )}
    </>
  );
};

export default Footer;
