import React from 'react';
import PropTypes from 'prop-types';
import AnchorLink from 'react-anchor-link-smooth-scroll';

import Link from '../components/Link'
import useMediaQuery from '../hooks/useMediaQuery';

export const menu = [
  {id: 1, page: "Home"},
  {id: 2, page: "Skills"},
  {id: 3, page: "Projects"},
  {id: 4, page: "Testimonials"},
  {id: 5, page: "Contact"},
]

const Navbar = ({isTopOfPage, selectedPage, setSelectedPage}) => {
  const [isMenuToggled, setIsMenuToggled] = React.useState(false);
  const isAboveSmallScreens = useMediaQuery("(min-width: 768px)");
  const navbarBackground = isTopOfPage ? "" : "bg-red";

  const setMenuItems = (screen) => {
    return (
      menu.map((item) => {
        return (
          screen === 'big' ? 
          <Link
            key={item.id}
            page={item.page}
            selectedPage={selectedPage}
            setSelectedPage={setSelectedPage}
          />
          : 
          <Link
            key={item.id}
            page={item.page}
            selectedPage={selectedPage}
            setSelectedPage={setSelectedPage}
            isMenuToggled={isMenuToggled}
            setIsMenuToggled={setIsMenuToggled}
          />
        )
      })
    )
  }

  return (
    <nav className={`${navbarBackground} z-40 w-full fixed top-0 py-6`}>
      <section className="flex items-center justify-between mx-auto w-5/6">
        <h4 className="font-playfair text-3xl font-bold">
          <AnchorLink
            href="#home"
            onClick={() => setSelectedPage("home")}
          >
            JE
          </AnchorLink>
        </h4>

        {isAboveSmallScreens ? (
          <div className="flex justify-between gap-16 font-opensans text-sm font-semibold">
            { setMenuItems("big") }
          </div>
        ) : (
          <button
            className="rounded-full bg-red p-2"
            onClick={() => setIsMenuToggled(!isMenuToggled)}
          >
            <img src="../assets/menu-icon.svg" alt="menu-icon" />
          </button>
        ) }

        {!isAboveSmallScreens && isMenuToggled && (
          <section className=" fixed right-0 bottom-0 h-full bg-blue w-[300px]">
            <div className="flex justify-end p-12">
              <button onClick={() => setIsMenuToggled(!isMenuToggled)}>
                <img src="../assets/close-icon.svg" alt="close-icon" />
              </button>
            </div>

            <div className="flex flex-col gap-10 ml-[33%] text-2xl text-deep-blue">
            { setMenuItems("small") }
            </div>
          </section>
        )}
      </section>
    </nav>
  );
};

Navbar.propTypes = {
  isTopOfPage: PropTypes.bool.isRequired,
  selectedPage: PropTypes.string.isRequired,
  setSelectedPage: PropTypes.func.isRequired,
};

export default Navbar;
