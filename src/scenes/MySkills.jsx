import React from 'react';
import { motion } from 'framer-motion';

import LineGradient from '../components/LineGradient';
import { useMediaQuery } from '../hooks/useMediaQuery';

const skills = [
  {id: '01', delay: 0, color: 'bg-blue', skill: 'Experience', text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt sed similique id perferendis aspernatur. Ex distinctio mollitia eligendi nam.'},
  {id: '02', delay: 0.2, color: 'bg-red', skill: 'Innovative', text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt sed similique id perferendis aspernatur. Ex distinctio mollitia eligendi nam.'},
  {id: '03', delay: 0.4, color: 'bg-yellow', skill: 'Imaginative', text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt sed similique id perferendis aspernatur. Ex distinctio mollitia eligendi nam.'},
]

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

      <section className="md: flex md: justify-between mt-16 gap-32">
        {
          skills.map((skill) => {
            return (
              <motion.div
                key={skill.id}
                className="md:w-1/3 mt-10"
                initial={{ opacity: 0, y: -50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ delay: skill.delay, duration: 0.5 }}
              >
                <article className="relative h-32">
                  <div className="z-10">
                    <p className="font-playfair font-semibold text-5xl">{skill.id}</p>
                    <p className="font-playfair font-semibold text-3xl mt-3">{skill.skill}</p>
                  </div>
                  <div className={`w-1/2 md:w-3/4 h-32 ${skill.color} absolute right-0 top-0 z-[-1]`} />
                </article>
                <p className="mt-5">
                  {skill.text}
                </p>
              </motion.div>
            )
          })
        }
      </section>
    </section>
  )
};

export default MySkills;
