import { useEffect, useState } from "react";
import { CiMenuFries } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";
import { FaMoon, FaSun } from "react-icons/fa";
/* eslint-disable no-unused-vars */
import { motion, AnimatePresence } from "motion/react";
import Aos from "aos";
import 'aos/dist/aos.css'

function Navigation({ closeMenu }) {
  return (
    <ul className="nav-ul">
      <li className="nav-li" onClick={closeMenu}><a href="#home">Home</a></li>
      <li className="nav-li" onClick={closeMenu}><a href="#about">About Me</a></li>
      <li className="nav-li" onClick={closeMenu}><a href="#work">My Work</a></li>
      <li className="nav-li mr-2" onClick={closeMenu}><a href="#contact">Contact Me</a></li>
    </ul>
  );
}

export default function Navbar() {
  const [isOpen, SetIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0)


  const closeMenu = () => {
    SetIsOpen(false)
  }

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY < lastScrollY) {
        setShowNavbar(true);
      }else if(currentScrollY > lastScrollY + 10){
        setShowNavbar(false)
      }

      setLastScrollY(currentScrollY)

      if(window.scrollY > 50){
        setIsScrolled(true)
      }
      else{
        setIsScrolled(false)
      }
    };

    window.addEventListener("scroll", handleScroll);
    return() => window.removeEventListener("scroll", handleScroll)
  }, [lastScrollY])

    useEffect(() => {
    Aos.init({duration: 2000});
  }, [])

  return (
    <div>
      <div className={`flex items-center justify-between fixed w-[96%] z-50 transition-all duration-300 ${isScrolled ? "backdrop-blur-md bg-white/50" : " "}` }
      style = {{
        transform: showNavbar ? 'translateY(0)' : 'translateY(-100%)',
      }}
      >
        {/* Logo Here */}
        <div data-aos="fade-down-right" className="logo">
          <img
            className="w-20 md:w-40"
            src="https://res.cloudinary.com/dlhevtzle/image/upload/v1760139262/nebmqk1yvs4wlo3bvj2i.svg"
            alt=""
          />
        </div>

        <div data-aos="fade-down-left" className="flex">
          {/* navigation two */}

          <nav className="hidden sm:flex">
            <Navigation closeMenu={closeMenu}/>
          </nav>

          {/* navigation two */}
          <AnimatePresence>
            {isOpen && (
              <motion.nav
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{opacity: 0, x:20}}
                style={{ maxHeight: "100vh" }}
                transition={{ duration: 1 }}
                className="absolute -right-4 pt-10 pr-6 bg-white z-20 h-[100vh] w-[100vw] sm:hidden text-end overflow-hidden"
              >
                <Navigation closeMenu={closeMenu}/>
              </motion.nav>
            )}
          </AnimatePresence>
          {/* button */}
          <button
            className="sm:hidden hover:opacity-50 cursor-pointer z-30"
            onClick={() => SetIsOpen(!isOpen)}
          >
            {isOpen ? (
              <IoMdClose size={35} className="text-3xl text-red-500" />
            ) : (
              <CiMenuFries size={35}/>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
