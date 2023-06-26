import { motion } from 'framer-motion';
import AnchorLink from 'react-anchor-link-smooth-scroll';

import useMediaQuery from '../hooks/useMediaQuery';

const Landing = ({ setSelectedPage }) => {
  const isAboveMediumScreens = useMediaQuery('(min-width:1060px)');
  return (
    <section
      id="home"
      className="md:flex justify-center text-center  md:h-full  py-10 "
    >
      <motion.div
        initial="hidden"
        whileInView={'visible'}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, x: -50 },
          visible: { opacity: 1, x: 0 },
        }}
        className="relative mt-28 flex flex-col items-center gap-8 "
      >
        <p className="stroke-blue font-opensans md:text-6xl  xs:text-5xl text-3xl font-bold">
          Hey I&apos;m Kraila
        </p>
        <h1 className="text-white font-playfair md:text-8xl xs:text-6xl  text-4xl ">
          Front End Dev
        </h1>
        <p className="max-w-sm">
          I specialize in creating visually stunning and user-friendly websites
          that deliver exceptional user experiences.
        </p>

        <div className=" max-w-sm flex items-center gap-4">
          <AnchorLink
            className=" font-opensans border-p-gray border  rounded-sm py-3 xs:px-7 px-5 xs:font-semibold
              hover:bg-p-gray hover:text-primary transition duration-500 tracking-widest"
            onClick={() => setSelectedPage('contact')}
            href="#contacts"
          >
            Lets Talk
          </AnchorLink>
          <AnchorLink
            className=" font-opensans bg-primary  rounded-sm py-3 xs:px-7  px-5 xs:font-semibold
              hover:bg-p-blue hover:text-white transition duration-500 tracking-widest"
            onClick={() => setSelectedPage('projects')}
            href="#projects"
          >
            My Work
          </AnchorLink>
        </div>
      </motion.div>
    </section>
  );
};

export default Landing;

/*



   <div className="md:order-2 flex justify-center basis-2/5 z-10 mt-16 md:mt-32 ">
        {isAboveMediumScreens ? (
          <div className="relative z-0 ml-20 before:absolute before:-top-20 before:-left-20 before:rounded-t-[400px] before:w-full before:max-w-[400px] md:before:max-w-[600px] before:h-full before:border-2 before:border-blue before:z-[-1]">
            <img
              alt="profile"
              className="hover:filter hover:saturate-200 transition duration-500 z-10 w-full max-w-[380px] md:max-w-[400px] max-h-[400px]"
              src="https://images.unsplash.com/flagged/photo-1595514191830-3e96a518989b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHBlcnNvbiUyMHByb2ZpbGV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
            />
          </div>
        ) : (
          <img
            className="z-10 w-full max-w-[300px] md:max-w-[400px] border rounded-t-[300px]"
            src="https://images.unsplash.com/flagged/photo-1595514191830-3e96a518989b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHBlcnNvbiUyMHByb2ZpbGV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
            alt="profile"
          />
        )}
      </div>
      <div className="z-30 basis-2/5 mt-12 md:mt-32">
        <motion.div
          initial="hidden"
          whileInView={'visible'}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <h1>Hey there</h1>
        </motion.div>
      </div>


       <motion.div
          className="flex mt-5 justify-center md:justify-start"
          initial="hidden"
          whileInView={'visible'}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >


          <AnchorLink
            className="bg-cool-gray text-white rounded-sm py-3 px-7 font-semibold
              hover:bg-blue hover:text-white transition duration-500"
            onClick={() => setSelectedPage('contact')}
            href="#contact"
          >
            Contact Me
          </AnchorLink>
          <AnchorLink
            className="rounded-r-sm bg-gradient-blue py-0.5 pr-0.5"
            onClick={() => setSelectedPage('contact')}
            href="#contact"
          >
            <div className="bg-mount-pink hover:text-yellow transition duration-500 w-full h-full flex items-center justify-center px-10 font-playfair">
              Lets talk.
            </div>
          </AnchorLink>
        </motion.div>

        <motion.div
          className="flex mt-5 justify-center md:justify-start"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <SocialMediaIcons />
        </motion.div>
*/
