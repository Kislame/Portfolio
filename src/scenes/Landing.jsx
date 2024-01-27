import { motion } from 'framer-motion';

import SocialMediaIcons from '../components/SocialMediaIcons';

const Landing = ({ setSelectedPage }) => {
  return (
    <section
      id="home"
      className=" border-b border-split snap-center flex flex-col items-center justify-center h-screen "
    >
      <motion.div
        initial="hidden"
        whileInView={'visible'}
        onViewportEnter={() => setSelectedPage('home')}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, x: -50 },
          visible: { opacity: 1, x: 0 },
        }}
        className="relative  flex flex-col items-center gap-8  text-center"
      >
        <p className="text-white   text-xl font-playfair">
          Hey I&apos;m Kraila
        </p>
        <h1 className=" text-orange-200 font-playfair md:text-7xl xs:text-6xl  text-3xl ">
          I&apos;m a Web Developer
        </h1>
        <p className="max-w-sm">
          I specialize in creating visually stunning and user-friendly websites
          that deliver exceptional user experiences.
        </p>

        <div className=" max-w-sm flex items-center gap-4">
          <SocialMediaIcons />
        </div>
      </motion.div>
    </section>
  );
};

export default Landing;
