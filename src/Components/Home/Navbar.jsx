import { useEffect, useState } from "react";
import { CiMenuFries } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";
import { FaMoon, FaSun } from "react-icons/fa";
import { motion, AnimatePresence } from "motion/react";
import { useTheme } from "../../Context/ThemeContext.jsx";

const NAV_ITEMS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Work", href: "#work" },
  { label: "Contact", href: "#contact" },
];

function Navigation({ closeMenu, isMobile }) {
  return (
    <ul className={`${isMobile ? "flex flex-col items-end gap-6 text-2xl" : "flex items-center gap-8"}`}>
      {NAV_ITEMS.map((item) => (
        <li key={item.href}>
          <a
            href={item.href}
            onClick={closeMenu}
            className="relative font-medium tracking-wide text-primary hover:text-[var(--accent-primary)] transition-colors duration-300 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[var(--accent-primary)] after:transition-all after:duration-300 hover:after:w-full"
          >
            {item.label}
          </a>
        </li>
      ))}
    </ul>
  );
}

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const { isDark, toggleDark } = useTheme();

  const closeMenu = () => setIsOpen(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY < lastScrollY) {
        setShowNavbar(true);
      } else if (currentScrollY > lastScrollY + 10) {
        setShowNavbar(false);
      }

      setLastScrollY(currentScrollY);
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  // Close mobile menu on resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 640) setIsOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "backdrop-blur-xl bg-navbar-scroll shadow-sm"
          : "bg-navbar backdrop-blur-sm"
      } border-b border-charte/50`}
      style={{ transform: showNavbar ? "translateY(0)" : "translateY(-100%)" }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-8 h-16 sm:h-20 flex items-center justify-between">
        {/* Logo — blanc en dark, noir en light */}
        <a href="#home" className="flex items-center">
          <img
            className="w-16 sm:w-20 md:w-28 h-auto transition-all duration-300"
            src="https://res.cloudinary.com/dlhevtzle/image/upload/v1760139262/nebmqk1yvs4wlo3bvj2i.svg"
            alt="DaiziDev Logo"
            style={{ filter: isDark ? 'none' : 'invert(1)' }}
          />
        </a>

        {/* Right section */}
        <div className="flex items-center gap-1 sm:gap-2">
          {/* Desktop Navigation */}
          <nav className="hidden sm:flex mr-4">
            <Navigation closeMenu={closeMenu} />
          </nav>

          {/* Dark mode toggle */}
          <button
            onClick={toggleDark}
            className="relative p-2.5 rounded-full hover:bg-[var(--accent-primary)]/10 transition-colors duration-300"
            aria-label={isDark ? "Activer le mode clair" : "Activer le mode sombre"}
          >
            <motion.div
              key={isDark ? "sun" : "moon"}
              initial={{ rotate: -90, opacity: 0, scale: 0.5 }}
              animate={{ rotate: 0, opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
            >
              {isDark ? (
                <FaSun size={18} className="text-accent-alt" />
              ) : (
                <FaMoon size={18} className="text-accent" />
              )}
            </motion.div>
          </button>

          {/* Hamburger button */}
          <button
            className="sm:hidden p-2 rounded-lg hover:bg-[var(--accent-primary)]/10 transition-colors duration-300"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Menu"
          >
            {isOpen ? (
              <IoMdClose size={24} className="text-red-500 dark:text-red-400" />
            ) : (
              <CiMenuFries size={24} className="text-primary" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="sm:hidden overflow-hidden bg-navbar backdrop-blur-xl border-t border-charte"
          >
            <div className="px-6 py-8">
              <Navigation closeMenu={closeMenu} isMobile />
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
