import { useState, useEffect, useRef } from 'react';

import Landing from './scenes/Landing';
import Navbar from './scenes/Navbar';
import DotLinks from './components/DotLinks';
import Projects from './scenes/Projects';
import Contact from './scenes/Contact';

import { motion as m } from 'framer-motion';
import MySkills from './scenes/MySkills';

function App() {
  const [selectedPage, setSelectedPage] = useState('home');
  const [isTopOfPage, setIsTopOfPage] = useState(true);
  const ref = useRef(null);

  useEffect(() => {
    const container = ref.current;

    function handleScroll(event) {
      event.stopPropagation();

      const delta = event.deltaY;

      container.scrollBy({
        top: delta,
        behavior: 'smooth',
      });
    }
    container.addEventListener('wheel', handleScroll, { passive: true });

    return () => container.removeEventListener('wheel', handleScroll);
  }, []);

  return (
    <m.div ref={ref} className="app  snap-y snap-mandatory scroll-smooth">
      <Navbar
        isTopOfPage={isTopOfPage}
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
      />
      <DotLinks selectedPage={selectedPage} />

      <Landing setSelectedPage={setSelectedPage} />

      <MySkills setSelectedPage={setSelectedPage} />

      <Projects setSelectedPage={setSelectedPage} />
      <Contact setSelectedPage={setSelectedPage} />
    </m.div>
  );
}

export default App;
