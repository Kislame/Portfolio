import { useForm } from 'react-hook-form';
import { motion } from 'framer-motion';

const Contact = ({ setSelectedPage }) => {
  const {
    register,
    trigger,
    formState: { errors },
  } = useForm();

  const onSubmit = async (e) => {
    console.log('~ e', e);
    const isValid = await trigger();
    if (!isValid) {
      e.preventDefault();
    }
  };

  return (
    <motion.section
      onViewportEnter={() => setSelectedPage('contacts')}
      viewport={{ amount: 1 }}
      id="contacts"
      className="contact border-b border-split snap-center  h-screen pt-48"
    >
      {/* HEADINGS */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, x: 50 },
          visible: { opacity: 1, x: 0 },
        }}
        className="flex justify-center w-full"
      >
        <div>
          <h2 className="font-playfair font-semibold ss:text-4xl  text-center text-xl ss:mb-8 mb-2">
            CONTACT ME TO GET STARTED
          </h2>
        </div>
      </motion.div>

      {/* FORM & IMAGE */}
      <div className="sm:flex justify-center  mt-5 w-5/6 sm:w-full mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
          className="basis-1/2 mt-10 md:mt-0"
        >
          <form
            target="_blank"
            onSubmit={onSubmit}
            action="https://formsubmit.co/shadoooo198@gmail.com"
            method="POST"
          >
            <input
              className=" text-primary text-lg w-full bg-white border-primary/50 border font-semibold placeholder-opaque-black p-3"
              type="text"
              placeholder="NAME"
              {...register('name', {
                required: true,
                maxLength: 100,
              })}
            />
            {errors.name && (
              <p className="text-red mt-1">
                {errors.name.type === 'required' && 'This field is required.'}
                {errors.name.type === 'maxLength' && 'Max length is 100 char.'}
              </p>
            )}

            <input
              className="w-full bg-white text-lg text-primary border-primary/50 border font-semibold placeholder-opaque-black p-3 mt-5"
              type="text"
              placeholder="EMAIL"
              {...register('email', {
                required: true,
                pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              })}
            />
            {errors.email && (
              <p className="text-red mt-1">
                {errors.email.type === 'required' && 'This field is required.'}
                {errors.email.type === 'pattern' && 'Invalid email address.'}
              </p>
            )}

            <textarea
              className="w-full bg-white text-lg text-primary border-primary/50 border font-semibold placeholder-opaque-black p-3 mt-5"
              name="message"
              placeholder="MESSAGE"
              rows="4"
              cols="50"
              {...register('message', {
                required: true,
                maxLength: 2000,
              })}
            />
            {errors.message && (
              <p className="text-red mt-1">
                {errors.message.type === 'required' &&
                  'This field is required.'}
                {errors.message.type === 'maxLength' &&
                  'Max length is 2000 char.'}
              </p>
            )}

            <button
              className="p-5 bg-p-dark border-p-gray border font-semibold text-white mt-5  hover:bg-black transition duration-500"
              type="submit"
            >
              SEND ME A MESSAGE
            </button>
          </form>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Contact;
