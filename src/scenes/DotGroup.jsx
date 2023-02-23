import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';

import { menu } from './Navbar'

const dotMenu = menu
const selectedStyles = `relative bg-yellow before:absolute before:w-6 before:h-6
    before:rounded-full before:border-2 before:border-yellow before:left-[-50%]
    before:top-[-50%]`;

const DotGroup = ({selectedPage, setSelectedPage}) => {
  
  return (
    <div className="flex flex-col gap-6 fixed top-[60%] right-7">
      {
        dotMenu.map((item) => {
          const lowerCasePage = item.page.toLowerCase();

          return (
            <AnchorLink key={item.id}
              className={`${
                selectedPage === lowerCasePage ? selectedStyles : "bg-dark-grey"} w-3 h-3 rounded-full`}
              href={`#${lowerCasePage}`}
              onClick={() => setSelectedPage(lowerCasePage)}
            />
          )
        })
      }
    </div>
  )
}

export default DotGroup;
