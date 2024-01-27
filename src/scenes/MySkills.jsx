import { motion as m } from 'framer-motion';
import { useState } from 'react';

const variants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * i,
    },
  }),
};

const MySkills = ({ setSelectedPage }) => {
  const [skills] = useState([
    'html',
    'css',
    'javscript',
    'typescript',
    'react',
    'redux',
    'express',
    'node.js',
    'next.js',
    'figma',
    'git',
    'tailwind',
    'framer motion',
    'mongodb',
  ]);
  const [move, setMove] = useState(100);
  return (
    <m.section
      id="skills"
      onViewportEnter={() => setSelectedPage('skills')}
      viewport={{ amount: 1 }}
      className="bg-white border-b border-split snap-center grid sm:grid-cols-2  h-screen "
    >
      <div className="bg-white text-black">
        <div className="w-[83.3%] sm:ml-auto h-full mx-auto flex flex-col justify-center ">
          <ul className=" ss:mt-12 mt-16 flex flex-wrap  pr-2 justify-center gap-2 sm:text-lg text-gray-800">
            {skills.map((skill, i) => (
              <m.li
                variants={variants}
                initial={'initial'}
                whileInView={'animate'}
                viewport={{ once: true }}
                className=" bg-white border border-black/10 rounded-xl px-5 py-3 shadow-md capitalize"
                key={i}
                custom={i}
              >
                {skill}
              </m.li>
            ))}
          </ul>
        </div>
      </div>
      <m.div
        initial={{
          scaleY: 0.7,
        }}
        whileInView={{
          scaleY: 1,
        }}
        transition={{
          duration: 0.5,
          ease: 'easeInOut',
        }}
        viewport={{ once: true }}
        className="bg-black origin-bottom"
      >
        <div className="w-[83.3%] ml-auto h-full flex flex-col justify-center sm:items-stretch  items-center ">
          <div>
            <m.h2
              initial={{
                y: 240,
              }}
              whileInView={{
                y: 0,
              }}
              transition={{
                duration: 0.33,
                ease: 'easeInOut',
              }}
              viewport={{ once: true }}
              className=" text-white md:text-6xl sm:text-4xl text-2xl font-opensans ss:mb-8 mb-4 "
            >
              My Skills
            </m.h2>
            <ul className="space-y-1">
              <li className="capitalize">agile scrum methodology</li>
              <li className="capitalize">benchmarking and optimization</li>
              <li className="capitalize">Code Testing and Debugging</li>
              <li className="capitalize">Cross-Browser Compatibility</li>
              <li className="capitalize">Responsive Web Design</li>
            </ul>
          </div>
        </div>
      </m.div>
    </m.section>
  );
};

export default MySkills;

/* 





<motion.div
          className="w-[300px]  h-[300px] flex flex-col items-center justify-between py-8 border rounded-xl cursor-pointer border-p-gray"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="flex items-center">
            <img
              src="/assets/css-3-svgrepo-com.svg"
              alt="css"
              className="w-10 h-10"
            />
            <h3 className="font-opensans  ss:text-2xl text-lg">Css</h3>
          </div>
          <div className="flex items-center gap-3 ">
            <img
              src="/assets/html-5-svgrepo-com.svg"
              alt="html"
              className="w-10 h-10"
            />
            <h3 className="font-opensans  ss:text-2xl text-lg">Html</h3>
          </div>
          <div className="flex items-center  gap-3">
            <img
              src="/assets/javascript-svgrepo-com.svg"
              alt="javascript"
              className="w-10 h-10"
            />
            <h3 className="font-opensans  ss:text-2xl text-lg">Javascript</h3>
          </div>
        </motion.div>
        <motion.div
          className=" relative before:bg-bulb before:h-full before:w-full before:absolute before:top-0 before:left-0 bg-dark/0.8  w-[300px] h-[300px] flex flex-col items-center justify-between py-8 border rounded-xl cursor-pointer border-p-gray"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="flex items-center gap-3">
            <img
              src="/assets/react-router-svgrepo-com.svg"
              alt="react"
              className="w-14 h-14"
            />
            <h3 className="font-opensans  ss:text-2xl text-lg">React Router</h3>
          </div>
          <div className="flex items-center gap-3">
            <img
              src="/assets/react-svgrepo-com.svg"
              alt="react"
              className="w-14 h-14"
            />
            <h3 className="font-opensans  ss:text-2xl text-lg">React</h3>
          </div>
        </motion.div>
        <motion.div
          className="w-[300px] h-[300px]  flex flex-col items-center justify-between py-8 border rounded-xl cursor-pointer border-p-gray "
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="flex items-center gap-3 ">
            <img
              src="/assets/redux-svgrepo-com.svg"
              alt="redux"
              className="w-14 h-14"
            />
            <h3 className="font-opensans  ss:text-2xl text-lg">Redux</h3>
          </div>
          <div className="flex items-center gap-3">
            <img
              src="/assets/tailwindcss-icon-svgrepo-com.svg"
              alt="tailwind css"
              className="w-14 h-14"
            />
            <h3 className="font-opensans ss:text-2xl text-lg">Tailwind Css</h3>
          </div>
        </motion.div>*/
