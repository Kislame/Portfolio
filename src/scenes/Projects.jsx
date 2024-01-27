import { motion as m } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import { twMerge } from 'tailwind-merge';

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const projectVariant = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
};

const Project = ({ title, img, desc, link, preview, ratio }) => {
  const overlayStyles = `cursor-pointer space-y-2  absolute h-full w-full opacity-0 hover:opacity-90 transition duration-500
    bg-grey z-20 flex flex-col justify-center items-center text-center p-16 text-deep-blue`;
  const projectTitle = title.split(' ').join('-').toLowerCase();

  return (
    <section
      className={`basis-full p-4 flex lg:justify-between justify-center items-center`}
    >
      <section className="relative">
        <div className={overlayStyles}>
          <p className="ss:text-2xl text-xl font-playfair">{title}</p>
          <a href={link} target={'_blank'} rel="noreferrer">
            Github Link
          </a>
          <a href={preview} target={'_blank'} rel="noreferrer">
            Preview
          </a>
        </div>
        <div
          className={twMerge(
            ratio === 'long' && 'ss:w-[360px] w-[320px]',
            ratio === 'wide' && 'ss:w-[420px] w-[320px]'
          )}
        >
          <img
            src={`   /assets/${img}.${
              img === 'easy-landing-page' ? 'jpg' : 'png'
            }`}
            alt={projectTitle}
            className="max-w-full object-fit"
          />
        </div>
      </section>
      <section className="space-y-3  basis-1/2 lg:block hidden">
        <h3 className="text-3xl font-playfair leading-loose">{title}</h3>
        <p className="leading-loose max-w-[80%]">{desc}</p>
      </section>
    </section>
  );
};

const Projects = ({ setSelectedPage }) => {
  const sliderRef = useRef(null);
  const leftBtnRef = useRef(null);
  const rightBtnRef = useRef(null);
  const indicatorParentsRef = useRef(null);
  const touchArea = useRef(null);

  const [sectionIndex, setSectionIndex] = useState(0);

  const handleRight = () => {
    setSectionIndex((prev) => {
      if (prev < 3) {
        return ++prev;
      } else {
        return 3;
      }
    });

    if (
      indicatorParentsRef.current &&
      sliderRef.current &&
      rightBtnRef.current &&
      leftBtnRef.current
    ) {
      let matrix = sectionIndex === 3 ? 3 : sectionIndex + 1;

      let list = Array.from(indicatorParentsRef.current.children);
      const li = list.find((li) => li.classList.contains('selected'));
      li.classList.remove('selected');
      list[matrix].classList.add('selected');
      sliderRef.current.style.transform = `translate(${matrix * -25}%)`;
    }
  };
  const handleLeft = () => {
    setSectionIndex((prev) => {
      if (prev > 0) {
        return --prev;
      } else {
        return 0;
      }
    });
    if (indicatorParentsRef.current && sliderRef.current) {
      let matrix = sectionIndex === 0 ? 0 : sectionIndex - 1;
      let list = Array.from(indicatorParentsRef.current.children);
      const li = list.find((li) => li.classList.contains('selected'));
      li.classList.remove('selected');
      list[matrix].classList.add('selected');
      sliderRef.current.style.transform = `translate(${matrix * -25}%)`;
    }
  };

  useEffect(() => {
    function handleControls() {
      if (indicatorParentsRef.current && sliderRef.current) {
        let list = Array.from(indicatorParentsRef.current.children);
        list.forEach((indicator, index) => {
          indicator.addEventListener('click', () => {
            handleIndicatorClick(list, index, indicator);
          });
        });
      }
    }
    function handleIndicatorClick(list, index, indicator) {
      setSectionIndex(index);
      let li = list.find((li) => li.classList.contains('selected'));
      li.classList.remove('selected');
      indicator.classList.add('selected');
      sliderRef.current.style.transform = `translate(${index * -25}%)`;
    }
    // Add event listener when component mounts
    handleControls();
    return () => {
      // Remove event listener when the component unmounts
      if (indicatorParentsRef.current && sliderRef.current) {
        let list = Array.from(indicatorParentsRef.current.children);
        list.forEach((indicator, index) => {
          indicator.removeEventListener('click', () => {
            handleIndicatorClick(list, index, indicator);
          });
        });
      }
    };
  }, [sectionIndex]);

  return (
    <m.section
      onViewportEnter={() => setSelectedPage('projects')}
      viewport={{ amount: 1 }}
      id="projects"
      className={twMerge(
        'transition-all ease-in duration-300 p-2 flex flex-col justify-center  border-b border-split snap-center  h-screen',
        sectionIndex === 0 && 'bg-slate-800',
        sectionIndex === 1 && 'bg-indigo-800',
        sectionIndex === 2 && 'bg-black',
        sectionIndex === 3 && 'bg-emerald-800'
      )}
    >
      <div ref={touchArea} className="ss:w-5/6 w-[calc(100%-1rem)] mx-auto">
        <div className="mt-20 relative  h-[560px] overflow-hidden">
          <div
            ref={sliderRef}
            className="h-full w-[400%] flex transition-all duration-300"
          >
            <Project
              title="mern stack ecommerce website"
              img={'ecommerce-app'}
              link={'https://github.com/Kislame/ecommerce-app'}
              preview={'https://ecommerce-app-bmlr.onrender.com/'}
              desc={
                ' Crafted with MongoDB, Express.js, React.js, Node.js, and Redux for state management. The image showcases a sleek, responsive design with Stripe integration for secure payments. Additionally, the site features robust user authorization.'
              }
              ratio="long"
            />
            <Project
              title="mern stack dashboard"
              img={'panel'}
              link={'https://github.com/Kislame/ecommerce-admin'}
              preview={'https://ecommerce-admin-xiw5.onrender.com/'}
              desc={
                ' a central hub where administrators effortlessly update products and monitor user statistics. Leveraging the power of Firebase for image storage and JWT for robust authorization, this dashboard ensures seamless control and insights for an enhanced administrative experience.'
              }
              ratio="wide"
            />

            <Project
              title="blog website with next.js"
              img={'blog'}
              link={'https://github.com/Kislame/blog-website'}
              preview={'https://blog-website-mauve-eta.vercel.app/'}
              desc={'blog websit built with next js, mdx , and github api.'}
              ratio="wide"
            />

            <Project
              title=" digital bank landing page"
              img={'easy-landing-page'}
              link={'https://github.com/Kislame/easybank-landing-page-master'}
              preview={
                'https://kislame.github.io/easybank-landing-page-master/'
              }
              desc={'landing page  challenge from the front end mentor design.'}
              ratio="long"
            />
          </div>
          <div className="controls z-30">
            <span
              onClick={handleLeft}
              ref={leftBtnRef}
              className={`arrow left ${
                sectionIndex === 0 ? 'hidden' : 'block'
              }`}
            >
              &lsaquo;
            </span>
            <span
              onClick={handleRight}
              ref={rightBtnRef}
              className={`arrow z-30 right ${
                sectionIndex === 3 ? 'hidden' : 'block'
              }`}
            >
              &rsaquo;
            </span>
            <ul ref={indicatorParentsRef}>
              <li className="selected"></li>
              <li></li>
              <li></li>
              <li></li>
            </ul>
          </div>
        </div>
      </div>
    </m.section>
  );
};

export default Projects;
