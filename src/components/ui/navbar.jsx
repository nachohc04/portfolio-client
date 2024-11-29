import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navbarRef = useRef(null);

  // Close the navbar if clicking outside of it
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navbarRef.current && !navbarRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav className="text-white relative z-50" ref={navbarRef}>
      <div className="container mx-auto flex items-center justify-between px-4 py-3">
        {/* Hamburger Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="z-10 md:hidden focus:outline-none"
        >
          <span className="sr-only">Toggle navigation</span>
          <svg
            className={`h-10 w-10 transition-transform duration-200 ${
              isOpen ? "rotate-90 text-green-500" : "text-white"
            }`}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </button>
      </div>

      {/* Gradient Fading Background */}
      <div
        className={`fixed inset-0 bg-gradient-to-b from-zinc-900 to-transparent transition-opacity duration-500 ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setIsOpen(false)}
      ></div>

      {/* Links */}
      <div
        className={`absolute left-0 right-0 top-full bg-zinc-900 bg-opacity-90 md:justify-start md:ml-10 md:static md:flex md:items-center md:space-x-6 md:bg-transparent transition-all duration-500 ease-in-out ${
          isOpen
            ? "max-h-[500px] opacity-100 transform translateY(0)"
            : "max-h-0 opacity-0 transform translateY(-100%)"
        } md:max-h-none md:opacity-100 md:transform-none`}
        style={{
          transition:
            "max-height 0.5s ease, opacity 0.3s ease, transform 0.3s ease",
        }}
      >
        {["Home", "About", "Contact"].map((item, index) => (
          <Link
            key={item}
            to={`/${item.toLowerCase()}`}
            onClick={() => setIsOpen(false)}
            className={`block px-4 py-2 text-2xl text-white hover:text-green-500 transform transition-all duration-500 ease-in-out hover:scale-110 md:inline-block md:opacity-100 md:transform-none ${
              isOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
            style={{
              opacity: isOpen || window.innerWidth >= 768 ? 1 : 0,
              transform:
                isOpen || window.innerWidth >= 768
                  ? "translateY(0)"
                  : "translateY(30px)",
              transitionDelay: `${isOpen ? index * 0.1 : 0}s`,
            }}
          >
            {item}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
