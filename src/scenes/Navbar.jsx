import { useState } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import useMediaQuery from '../hooks/useMediaQuery';

const Link = ({ page, selectedPage, setSelectedPage, isTopOfPage }) => {
  const lowerCasePage = page.toLowerCase();
  return (
    <AnchorLink
      className={` ${
        isTopOfPage ? '' : 'text-white'
      }  hover:text-yellow transition duration-500 text-lg`}
      href={`#${lowerCasePage}`}
      onClick={() => setSelectedPage(lowerCasePage)}
    >
      {page}
    </AnchorLink>
  );
};

const Navbar = ({ isTopOfPage, selectedPage, setSelectedPage }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isAboveSmallScreens = useMediaQuery('(min-width: 768px)');
  const navbarBackground = isTopOfPage ? '' : 'bg-primary';

  return (
    <nav
      className={` text-white ${navbarBackground} z-40 w-full fixed top-0 py-6`}
    >
      <div className=" flex items-center justify-between mx-auto  w-5/6">
        <h4
          className={`font-playfair text-4xl font-bold ${
            isTopOfPage ? '' : 'text-white'
          }`}
        >
          KMI
        </h4>
        {isAboveSmallScreens ? (
          <div className="flex justify-between gap-16 font-opensans text-sm font-semibold">
            <Link
              page="Home"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
              isTopOfPage={isTopOfPage}
            />
            <Link
              page="Skills"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
              isTopOfPage={isTopOfPage}
            />
            <Link
              page="Projects"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
              isTopOfPage={isTopOfPage}
            />
            <Link
              page="Contacts"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
              isTopOfPage={isTopOfPage}
            />
          </div>
        ) : (
          <button
            className="rounded-full bg-cool-gray p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6"
            >
              <path
                fillRule="evenodd"
                d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm8.25 5.25a.75.75 0 01.75-.75h8.25a.75.75 0 010 1.5H12a.75.75 0 01-.75-.75z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        )}
        {!isAboveSmallScreens && isMenuOpen && (
          <div className="fixed right-0 bottom-0 h-full bg-primary w-[300px]">
            <div className="flex justify-end p-12 ">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z"
                    fill="white"
                    fillOpacity="0.54"
                  />
                </svg>
              </button>
            </div>
            <div className="flex flex-col gap-10 ml-[33%] text-2xl text-deep-blue">
              <Link
                page="Home"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
              <Link
                page="Skills"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
              <Link
                page="Projects"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
              <Link
                page="Contacts"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
