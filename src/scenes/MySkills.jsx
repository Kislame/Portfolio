import useMediaQuery from '../hooks/useMediaQuery';
import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

const MySkills = () => {
  const cardsRef = useRef(null);
  const [card, setCard] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const { target } = e;
    const rect = target.getBoundingClientRect();
    console.log(rect, 'mouse', e.clientX, e.clientY);
    setCard({ x: e.clientX - rect.left, y: e.clientY - rect.top });
    target.style.setProperty('--mouse-x', `${card.x}px`);
    target.style.setProperty('--mouse-y', `${card.y}px`);
  };

  useEffect(() => {}, []);
  const isAboveLarge = useMediaQuery('(min-width: 1060px)');
  return (
    <section id="skills" className="pt-10 pb-24  w-5/6 mx-auto">
      {/* HEADER AND IMAGE SECTION */}
      <div className="md:flex justify-center md:gap-16 mt-32">
        <motion.div
          className="md:w-1/3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <h2 className="font-opensans text-center font-semibold ss:text-4xl  text-2xl mb-8">
            MY SKILLS
          </h2>
        </motion.div>
      </div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        <ul ref={cardsRef} className="flex flex-wrap gap-4 justify-center">
          <li
            className={`border-t-emerald-300 border-r-p-blue  border-l-emerald-300 border-b-p-blue relative w-[300px]  h-[300px] flex flex-col items-center justify-between py-8 border rounded-xl cursor-pointer border-p-gray
                `}
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
          </li>
          <li
            className=" border-t-emerald-300 border-r-p-blue  border-l-emerald-300 border-b-p-blue relative w-[300px]  h-[300px] flex flex-col items-center justify-around py-8 border rounded-xl cursor-pointer border-p-gray
                  "
          >
            <div className="flex items-center gap-3">
              <img
                src="/assets/react-router-svgrepo-com.svg"
                alt="react"
                className="w-10 h-10"
              />
              <h3 className="font-opensans  ss:text-2xl text-lg">
                React Router
              </h3>
            </div>
            <div className="flex items-center gap-3">
              <img
                src="/assets/react-svgrepo-com.svg"
                alt="react"
                className="w-10 h-10"
              />
              <h3 className="font-opensans  ss:text-2xl text-lg">React</h3>
            </div>
          </li>
          <li
            className=" relative w-[300px]  h-[300px] flex flex-col items-center justify-between py-8 border rounded-xl cursor-pointer border-p-gray
                border-t-emerald-300 border-r-p-blue  border-l-emerald-300 border-b-p-blue "
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
              <h3 className="font-opensans ss:text-2xl text-lg">
                Tailwind Css
              </h3>
            </div>
          </li>
        </ul>
      </motion.div>
    </section>
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
