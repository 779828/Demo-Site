const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between gap-y-8">
          <div className="w-full md:w-1/3">
            <h2 className="text-2xl font-bold text-white mb-3">Sha-Shank</h2>
            <p className="text-gray-400">
              Your Trusted Source for Quality Products! Delivering quality and
              excellence since 2020.
            </p>
          </div>

          <div className="w-full md:w-1/3">
            <h3 className="text-lg font-semibold text-white mb-3">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="/home"
                  className="text-gray-400 hover:text-white transition"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="/about"
                  className="text-gray-400 hover:text-white transition"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className="text-gray-400 hover:text-white transition"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div className="w-full md:w-1/3">
            <h3 className="text-lg font-semibold text-white mb-3">Follow Us</h3>
            <div className="flex space-x-4 flex-wrap">
              {[
                { name: "Facebook", icon: "fab fa-facebook-f" },
                { name: "Twitter", icon: "fab fa-twitter" },
                { name: "Instagram", icon: "fab fa-instagram" },
                { name: "LinkedIn", icon: "fab fa-linkedin-in" },
              ].map((social) => (
                <a
                  key={social.name}
                  href="#"
                  className="flex items-center text-gray-400 hover:text-white transition"
                >
                  <i className={`${social.icon} mr-2`}></i>
                  {social.name}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-8 text-center text-gray-500">
          <p>
            &copy; {new Date().getFullYear()} Sha-Shank. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
