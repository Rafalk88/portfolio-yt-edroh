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

  React.useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTopOfPage(true);
      } else {
        setIsTopOfPage(false);

        if (window.scrollY  >= 0 && window.scrollY  < 823 ) setSelectedPage("home");
        if (window.scrollY  >= 823 && window.scrollY  < 1646 ) setSelectedPage("skills");
        if (window.scrollY  >= 1646 && window.scrollY  < 3173 ) setSelectedPage("projects");
        if (window.scrollY  >= 3173 && window.scrollY  < 4083 ) setSelectedPage("testimonials");
        if (window.scrollY  >= 4083) setSelectedPage("contact");
      }
    }
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
