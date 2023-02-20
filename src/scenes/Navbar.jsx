import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';

import useMediaQuery from '../hooks/useMediaQuery';

const menu = [
  {id: 1, page: "Home"},
  {id: 2, page: "Skills"},
  {id: 3, page: "Projects"},
  {id: 4, page: "Testimonials"},
  {id: 5, page: "Contact"},
]

const Link = ({page, selectedPage, setSelectedPage}) => {
  const lowerCasePage = page.toLowerCase();

  return (
    <AnchorLink 
      className={`${selectedPage === lowerCasePage ? "text-yellow" : ""}
        hover: text-yellow transition duration-500`}
      href={`#${lowerCasePage}`}
      onClick={() => setSelectedPage(lowerCasePage)}
    >
      {page}
    </AnchorLink>
  )
};

const Navbar = ({selectedPage, setSelectedPage}) => {
  const [isMenuToggled, setIsMenuToggled] = React.useState(false);
  const isAboveSmallScreens = useMediaQuery("(min-width: 768px)");

  return (
    <nav className={`z-40 w-full fixed top-0 py-6`}>
      <div className="flex items-center justify-between mx-auto w-5/6">
        <h4 className="font-playfair text-3xl font-bold">JE</h4>

        {isAboveSmallScreens ? (
          <div className="flex justify-between gap-16 font-opensans text-sm font-semibold">
            {
              menu.map((item) => {
                return (
                  <Link
                    key={item.id}
                    page={item.page}
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />
                )
              })
            }
          </div>
        ) : (
          <button
            className="rounded-full bg-red p-2"
            onClick={() => setIsMenuToggled(!isMenuToggled)}
          >
            <img src="../assets/menu-icon.svg" alt="menu-icon" />
          </button>
        ) }
      </div>
    </nav>
  );
};

export default Navbar;
