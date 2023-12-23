import { useState, useEffect } from 'react';
import useMediaquery from './hooks/useMediaQuery';
// import Landing from './scenes/Landing';
import Navbar from './scenes/Navbar';

// import MySkills from './scenes/MySkills';
// import { motion } from 'framer-motion';
// import Projects from './scenes/Projects';
// import Contact from './scenes/Contact';
// import DotGroup from './scenes/DotGroup';

function App() {
  const [selectedPage, setSelectedPage] = useState('home');
  const [isTopOfPage, setIsTopOfPage] = useState(true);
  // const isAboveMediumScreens = useMediaquery('(min-width: 1060px)');

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
    </div>
  );
}

export default App;
