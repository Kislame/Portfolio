import { useState } from 'react';
import { menuSlide } from '../animations/anim';
import { motion as m, AnimatePresence } from 'framer-motion';

const RenderLinks = () => {
  const navLinks = ['home', 'skills', 'projects', 'contacts'];
  const handleNav = (title) => {
    document.getElementById(title).scrollIntoView({
      behavior: 'smooth',
    });
  };
  return (
    <ul
      className="
    flex flex-col gap-10 items-center mt-20 p-[100px]
     text-4xl"
    >
      {navLinks.map((title, i) => (
        <li className="hover:text-orange-200 transition duration-500" key={i}>
          <button onClick={() => handleNav(title)}>{title}</button>
        </li>
      ))}
    </ul>
  );
};

const Navbar = ({ isTopOfPage, selectedPage, setSelectedPage }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navbarBackground = isTopOfPage ? '' : 'bg-primary';
  const handleClick = (e) => {
    e.stopPropagation();
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav
      className={` text-white ${navbarBackground} z-40 w-full sticky top-0 sm:py-6 py-3`}
    >
      <div className=" flex items-center justify-between mx-auto  w-5/6">
        <h4
          className={`font-playfair text-4xl font-bold ${
            selectedPage === 'skills' ? 'text-black' : 'text-white'
          }`}
        >
          KMI
        </h4>
        <button
          onClick={handleClick}
          className=" z-40 w-20 h-20 rounded-full flex items-center justify-center  "
        >
          <span
            className={` relative   w-full  after:block after:bg-p-gray after:m-auto after:w-[40%] after:h-[1px] after:relative after:transition-transform after:duration-300 after:ease-out
          after:top-[-5px]  before:block before:bg-p-gray before:m-auto before:w-[40%] before:h-[1px] before:relative before:transition-transform before:duration-300 before:ease-out
          before:top-[5px] ${
            isMenuOpen
              ? 'after:rotate-45 after:top-[2px]  before:-rotate-45 '
              : ''
          }
          `}
          ></span>
        </button>

        <AnimatePresence mode="wait">
          {isMenuOpen && (
            <m.div
              variants={menuSlide}
              initial="initial"
              animate="enter"
              exit="exit"
              className="fixed flex flex-col justify-center z-5 right-0 bottom-0 h-full bg-curved-gray  "
            >
              <RenderLinks />
            </m.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar;
