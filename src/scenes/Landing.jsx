import PropTypes from 'prop-types';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { motion } from 'framer-motion';

import SocialMediaIcons from '../components/SocialMediaIcons';
import { useMediaQuery } from '../hooks/useMediaQuery';

export const icons = [
  {id: 1, name: 'linkedin', link: 'https://linkedin.com'},
  {id: 2, name: 'twitter', link: 'https://twitter.com'},
  {id: 3, name: 'facebook', link: 'https://facebook.com'},
  {id: 4, name: 'instagram', link: 'https://instagram.com'},
]

export const Landing = ({setSelectedPage}) => {
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");

  return (
    <section id="home" className="md:flex md:justify-between md:items-center md:h-full gap-16 py-10">
      <figure className="md:order-2 flex justify-center basis-3/5 z-10 mt-16 md:mt-32">
        {isAboveMediumScreens ? (
          <div
            className="relative z-0 ml-20 before:absolute before:-top-20 before:-left-20 before:rounded-t-[400px]
              before:w-full before:max-w-[400px] md:before:max-w-[600px] before:h-full before:border-2 
              before:border-blue before:z-[-1]"
          >
            <img 
              src="../assets/profile-image.png"
              alt="profile"
              className="hover: filter hover:saturate-200 transition duration-500 z-10 w-full
              max-w-[300px] md:max-w-[400px]"
            />
          </div>
        ) : (
          <img 
              src="../assets/profile-image.png"
              alt="profile"
              className="hover: filter hover:saturate-200 transition duration-500 z-10 w-full
              max-w-[400px] md:max-w-[600px]"
            />
        )}
      </figure>
      <article className="z-30 basis-2/5 mt-12 md:mt-32">
        <motion.div
          initial={{opacity: 0, x: -50}}
          whileInView={{opacity: 1, x: 0}}
          viewport={{ once: true, amount: 0.5 }}
          ransition={{ duration: 0.5 }}
        >
          <p className="text-6xl font-playfair z-10 text-center md:text-start">
            Jane {""}
            <span className="xs:relative xs:text-deep-blue xs:font-semibold z-20
            xs:before:content-brush before:absolute before:-left-[25px]
            before:-top-[70px] before:z-[-1]">
              Esper
            </span>
          </p>

          <p className="mt-10 mb-7 text-sm text-center md:text-start">
            Adipiscing arcu, in aliquam fringilla cursus. Elit arcu elementum
            viverra malesuada sem ac faucibus dolor. Sagittis scelerisque.
          </p>
        </motion.div>

        <motion.div
          className="flex mt-5 justify-center md:justify-start"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <AnchorLink
            className="bg-gradient-rainblue text-deep-blue rounded-sm py-3 px-7 font-semibold
              hover:bg-blue hover:text-white transition duration-500"
            onClick={() => setSelectedPage("contact")}
            href="#contact"
          >
            Contact Me
          </AnchorLink>

          <AnchorLink
            className="rounded-r-sm bg-gradient-rainblue py-0.5 pr-0.5"
            onClick={() => setSelectedPage("contact")}
            href="#contact"
          >
            <div
              className="bg-deep-blue hover:text-red transition duration-500 w-full h-full flex items-center
                justify-center font-playfair px-10"
            >
              Let's talk.
            </div>
          </AnchorLink>
        </motion.div>

        <motion.div
          className="flex mt-5 justify-center md:justify-start"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          <SocialMediaIcons icons={icons} />
        </motion.div>
      </article>
    </section>
  );
};

Landing.propTypes = {
  setSelectedPage: PropTypes.func.isRequired,
};

export default Landing;
