import PropTypes from 'prop-types';
import { motion } from 'framer-motion';

const overlayStyles = `absolute h-full w-full opacity-0 hover:opacity-90 transition duration-500
    bg-grey z-30 flex flex-col justify-center items-center text-center p-16 text-deep-blue`;

export const Project = ({ title = '', projectVariant = {}, content = '' }) => {
  const projectTitle = title.split(' ').join('-').toLowerCase();
  
  return (
    <motion.div variants={projectVariant} className="relative">
      <article className={overlayStyles}>
        <p className="text-2xl font-playfair">{title}</p>
        <p className="mt-7">
          {content}
        </p>
      </article>
        <figure>
          <img src={`../assets/${projectTitle}.jpeg`} alt={projectTitle} />
        </figure>
    </motion.div>
  )
};

Project.propTypes = {
  title: PropTypes.string.isRequired,
  projectVariant: PropTypes.object.isRequired,
  content: PropTypes.string.isRequired,
};

export default Project;
