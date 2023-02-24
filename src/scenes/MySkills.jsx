import React from 'react';
import { motion } from 'framer-motion';

import LineGradient from '../components/LineGradient';
import { useMediaQuery } from '../hooks/useMediaQuery';

export const MySkills = () => {
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");

  return (
    <section
      id="skills"
      className="pt-10 pb-24"
    >
      <article className="md:flex md:justify-between md:gap-16 mt-32">
        <motion.div
          className="md:w-1/3"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
        >
          <p
            className="font-playfair font-semibold text-4xl mb-5"
          >
            MY <span className="text-red">SKILLS</span>
          </p>
          <LineGradient width="w-1/3" />
          <p className="mt-10 mb-7">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, numquam maxime cum quibusdam pariatur nobis
          </p>
        </motion.div>
        <aside className="mt-16 md:mt-0">
          {isAboveMediumScreens ? (
            <div
            className="relative z-0 ml-20 before:absolute before:-top-10 before:-left-10
              before:w-full before:h-full before:border-2 before:border-blue before:z-[-1]"
          >
            <img 
              src="../assets/skills-image.png"
              alt="skills"
              className="z-10"
            />
          </div>
          ) : (
            <img 
              src="../assets/skills-image.png"
              alt="skills"
              className="z-10"
            />
          )}
        </aside>
      </article>

      <section className="">

      </section>
    </section>
  )
};

export default MySkills;
