import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

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

const Project = ({ title, img, desc, link, preview }) => {
  const overlayStyles = `space-y-2  absolute h-full w-full opacity-0 hover:opacity-90 transition duration-500
    bg-grey z-30 flex flex-col justify-center items-center text-center p-16 text-deep-blue`;
  const projectTitle = title.split(' ').join('-').toLowerCase();

  return (
    <motion.div variants={projectVariant} className="relative">
      <div className={overlayStyles}>
        <p className="text-2xl font-playfair">{title}</p>
        <a href={link} target={'_blank'} rel="noreferrer">
          Github Link
        </a>
        <a href={preview} target={'_blank'} rel="noreferrer">
          Preview
        </a>
      </div>
      <img
        src={`   /assets/${img}.${img === 'easy-landing-page' ? 'jpg' : 'png'}`}
        alt={projectTitle}
      />
    </motion.div>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="pt-48 pb-48">
      {/* HEADINGS */}
      <motion.div
        className="md:w-2/5 mx-auto text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, y: -50 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        <div className="mb-8 space-y-4">
          <h2 className="font-playfair font-semibold text-4xl">Projects</h2>
          <p className="font-opensans text-white text-lg">
            Take a look at some of my projects i have done
          </p>
        </div>
      </motion.div>

      {/* PROJECTS */}
      <div className="flex justify-center">
        <motion.div
          className="grid sm:grid-cols-2 gap-4"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className="h-md w-md bg-sky-400 text-white font-playfair flex items-center justify-center md:text-3xl text-xl py-8 ">
            Smooth User Experience
          </div>
          <Project
            title="Register Form"
            img={'sign-up'}
            link={'https://github.com/Kislame/sing-up-form'}
            preview={'https://kislame.github.io/sing-up-form/'}
          />

          <Project
            title="admin panel"
            img={'panel'}
            link={'https://github.com/Kislame/admin-dashboard'}
            preview={'https://admin-dashboard-ekt7.onrender.com'}
          />
          <Project
            title="mern stack dashboard"
            img={'dashboard'}
            link={'https://github.com/Kislame/ecommerce-admin'}
            preview={'https://ecommerce-admin-xiw5.onrender.com/'}
          />

          <Project
            title="bank landing page"
            img={'easy-landing-page'}
            link={'https://github.com/Kislame/easybank-landing-page-master'}
            preview={'https://kislame.github.io/easybank-landing-page-master/'}
          />
          <Project
            title="mern stack ecommerce website"
            img={'ecommerce-app'}
            link={'https://github.com/Kislame/ecommerce-app'}
            preview={'https://ecommerce-app-bmlr.onrender.com/'}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
