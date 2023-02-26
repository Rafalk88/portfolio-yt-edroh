import { motion } from 'framer-motion';

import LineGradient from '../components/LineGradient';

const testimonialsStyles = `mx-auto relative max-w-[400px] h-[350px] flex flex-col
    justify-end p-16 mt-48 before:absolute before:top-[-120px] before:-ml-[110px]
    before:left-1/2`;

export const Testimonials = () => {
  return (
    <section id="testimonials" className="pt-32 pb-16">
      <motion.div
          className="md:w-1/3 text-center md: text-left"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
        >
          <p
            className="font-playfair font-semibold text-4xl mb-5 text-red"
          >
            TESTIMONIALS
          </p>
          <LineGradient width="mx-auto w-2/4" />
          <p className="mt-10">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, numquam maxime cum quibusdam pariatur nobis
          </p>
        </motion.div>
    </section>
  )
};

export default Testimonials;
