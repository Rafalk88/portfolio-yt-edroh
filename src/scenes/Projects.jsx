import { motion } from 'framer-motion';

import LineGradient from '../components/LineGradient';

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 },
  },
};

const projectVariant = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
};

export const Projects = () => {
  return (
    <section
      id="projects"
      className="pt-48 pb-48"
    >
      <motion.div
          className="md:w-2/4 mx-auto text-center"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
        >
          <div>
            <p
              className="font-playfair font-semibold text-4xl"
            >
              <span className="text-red">PRO</span>JECTS
            </p>
            <div className="flex justify-center mt-5">
              <LineGradient width="w-1/3" />
            </div>
          </div>
          <p className="mt-10 mb-10">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, numquam maxime cum quibusdam pariatur nobis
          </p>
        </motion.div>

        <div className="flex justify-center">
          <motion.div
            className="sm:grid sm:grid-cols-3"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={container}
          >
            <div className="flex justify-center text-center items-center p-10 bg-red
              max-w-[400px] max-h-[400px] text-2xl font-playfair font-semibold">
              BEAUTIFUL USER INTERFACES
            </div>
          </motion.div>
        </div>
    </section>
  )
};

export default Projects;
