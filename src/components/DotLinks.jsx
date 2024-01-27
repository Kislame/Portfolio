import { motion as m } from 'framer-motion';
const DotLinks = ({ selectedPage }) => {
  const navLinks = ['home', 'skills', 'projects', 'contacts'];
  const handleNav = (title) => {
    document.getElementById(title).scrollIntoView({
      behavior: 'smooth',
    });
  };
  return (
    <div className="  fixed h-full right-0 top-0 w-[60px]  flex-col justify-center hidden sm:flex">
      <ul className="space-y-2 ">
        {navLinks.map((title, i) => (
          <li
            onClick={(e) => {
              e.stopPropagation();
              handleNav(title);
            }}
            className={`${
              selectedPage === title ? 'hover:scale-100' : 'hover:scale-150'
            } duration-200 transition-all cursor-pointer text-center p-1`}
            key={i}
          >
            <span
              className={`inline-block transition duration-500 bg-p-gray w-[5px] h-[5px]  rounded-full ${
                selectedPage === title ? 'scale-150' : 'scale-100'
              }`}
            ></span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DotLinks;
