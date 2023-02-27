import React from "react";

import Navbar from './scenes/Navbar';
import DotGroup from './scenes/DotGroup';
import Landing from './scenes/Landing';
import MySkills from './scenes/MySkills';
import Projects from './scenes/Projects';
import Testimonials from './scenes/Testimonials';
import Contact from './scenes/Contact';
import Footer from './scenes/Footer';
import LineGradient from './components/LineGradient';

import { useMediaQuery } from './hooks/useMediaQuery';

const App = () => {
  const [selectedPage, setSelectedPage] = React.useState('home');
  const [isTopOfPage, setIsTopOfPage] = React.useState(true);
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");

  const verySmallScreen = useMediaQuery('(max-width: 767px');
  const smallScreen = useMediaQuery('(min-width: 768px)');
  const mediumScreen = isAboveMediumScreens;
  
  const getScrollY = React.useCallback((section) => {
      let scrollY

      if (verySmallScreen) {
        if (section === "home") scrollY = 997
        if (section === "skills") scrollY = 2481
        if (section === "projects") scrollY = 5293
        if (section === "testimonials") scrollY = 7315
      }

      if (smallScreen) {
        if (section === "home") scrollY = 915
        if (section === "skills") scrollY = 2364
        if (section === "projects") scrollY = 3580
        if (section === "testimonials") scrollY = 5550
      }

      if (mediumScreen) {
        if (section === "home") scrollY = 823
        if (section === "skills") scrollY = 1646
        if (section === "projects") scrollY = 3173
        if (section === "testimonials") scrollY = 4083
      }

      return scrollY
  }, [mediumScreen, smallScreen, verySmallScreen])

  React.useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTopOfPage(true);
      } else {
        setIsTopOfPage(false);

        if (window.scrollY  >= 0 && window.scrollY  < getScrollY('home') ) setSelectedPage("home");
        if (window.scrollY  >= getScrollY('home') && window.scrollY  < getScrollY('skills') ) setSelectedPage("skills");
        if (window.scrollY  >= getScrollY('skills') && window.scrollY  < getScrollY('projects') ) setSelectedPage("projects");
        if (window.scrollY  >= getScrollY('projects') && window.scrollY  < getScrollY('testimonials') ) setSelectedPage("testimonials");
        if (window.scrollY  >= getScrollY('testimonials')) setSelectedPage("contact");
      }
    }
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [getScrollY]);

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
        <Landing selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
      </div>
      <LineGradient />
      <div className="w-5/6 mx-auto md:h-full">
        <MySkills />
      </div>
      <LineGradient />
      <div className="w-5/6 mx-auto">
        <Projects />
      </div>
      <LineGradient />
      <div className="w-5/6 mx-auto">
        <Testimonials />
      </div>
      <LineGradient />
      <div className="w-5/6 mx-auto md:h-full">
        <Contact />
      </div>
      <Footer />
    </div>
  );
};

export default App;
