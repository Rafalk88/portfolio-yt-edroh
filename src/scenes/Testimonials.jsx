import { motion } from 'framer-motion';

import LineGradient from '../components/LineGradient';

const testimonialsStyles = `mx-auto relative max-w-[400px] h-[350px] 
  flex flex-col justify-end p-16 mt-48 before:absolute before:top-[-120px] 
  before:-ml-[110px] before:left-1/2`;

const testimonials = [
  {id: 1, bgColor: 'bg-blue', content: 'person1', delay: 0, text: 'Lorem, ipsum dolor sit amet consectetur'},
  {id: 2, bgColor: 'bg-red', content: 'person2', delay: 0.2, text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit.'},
  {id: 3, bgColor: 'bg-yellow', content: 'person3', delay: 0.4, text: 'Lorem, ipsum dolor sit amet consectetur adipisicing'},
]

export const Testimonials = () => {
  return (
    <section id="testimonials" className="pt-32 pb-16">
      <motion.div
          className="md:w-1/3 text-center md:text-left"
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

        <div className="md:flex md:justify-between gap-8">
          {
            testimonials.map(testimonial => {
              return (
                <motion.div
                  key={testimonial.id}
                  className={`${testimonial.bgColor} ${testimonialsStyles} before:content-${testimonial.content}`}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ delay: testimonial.delay, duration: 0.5 }}
                >
                  <p className="font-playfair text-6xl">"</p>
                  <p className="text-center text-xl">
                    {testimonial.text}
                  </p>
                </motion.div>
              )
            })
          }
        </div>
    </section>
  )
};

export default Testimonials;
