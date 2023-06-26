import { useState, useEffect, useRef } from 'react';
import useMediaquery from './hooks/useMediaQuery';
import Landing from './scenes/Landing';
import Navbar from './scenes/Navbar';

import MySkills from './scenes/MySkills';
import { motion } from 'framer-motion';
import Projects from './scenes/Projects';
import Contact from './scenes/Contact';

function App() {
  const cursorRef = useRef();
  const [selectedPage, setSelectedPage] = useState('home');
  const [isTopOfPage, setIsTopOfPage] = useState(true);
  const isAboveMediumScreens = useMediaquery('(min-width: 1060px)');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTopOfPage(true);
        setSelectedPage('home');
      }
      if (window.scrollY !== 0) setIsTopOfPage(false);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="app">
      <Navbar
        isTopOfPage={isTopOfPage}
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
      />

      <div>
        <div className="w-5/6  mx-auto md:h-full">
          <motion.div
            margin="0 0 -200px 0"
            amount="all"
            onViewportEnter={() => setSelectedPage('home')}
          >
            <Landing setSelectedPage={setSelectedPage} />
          </motion.div>
        </div>
        <div className="h-[178px] bg-pattern bg-no-repeat bg-cover " />
      </div>

      <div className=" md:h-full ">
        <motion.div
          margin="0 0 -200px 0"
          amount="all"
          onViewportEnter={() => setSelectedPage('skills')}
        >
          <MySkills />
        </motion.div>
      </div>

      <div className="w-5/6 mx-auto">
        <motion.div
          margin="0 0 -200px 0"
          amount="all"
          onViewportEnter={() => setSelectedPage('projects')}
        >
          <Projects />
        </motion.div>
      </div>

      <div className="w-5/6 mx-auto md:h-full">
        <motion.div
          margin="0 0 -200px 0"
          amount="all"
          onViewportEnter={() => setSelectedPage('contact')}
        >
          <Contact />
        </motion.div>
      </div>
    </div>
  );
}

export default App;
