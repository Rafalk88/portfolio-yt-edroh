import React from "react";

import Navbar from './scenes/Navbar';
import DotGroup from './scenes/DotGroup';
import { useMediaQuery } from './hooks/useMediaQuery';

const App = () => {
  const [selectedPage, setSelectedPage] = React.useState('home');
  const [isTopOfPage, setIsTopOfPage] = React.useState(true);
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");

  React.useEffect(() => {
    const handleScroll = () => {
      window.scrollY === 0 ? setIsTopOfPage(true) : setIsTopOfPage(false)
    }
    window.addEventListener("scroll", handleScroll)

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="app bg-deep-blue">
      <Navbar
        isTopOfPage={isTopOfPage}
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
      />
      <div className="w-5/6 mx-auto md:h-full">
        {isAboveMediumScreens && (
          <div>
            <DotGroup 
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
          </div>
        )}
        <Landing selectedPage={selectedPage} />
      </div>
    </div>
  );
};

export default App;