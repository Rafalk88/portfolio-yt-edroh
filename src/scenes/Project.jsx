import React from 'react';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';

import ProjectInfo from './ProjectInfo';

const overlayStyles = `absolute h-full w-full opacity-0 hover:opacity-90 transition duration-500
    bg-grey z-30 flex flex-col justify-center items-center text-center p-16 text-deep-blue cursor-pointer`;

export const Project = ({ title = '', projectVariant = {}, content = '', gitHubLink, demo = false, demoLink = '' }) => {
  const [isInfoShown, setIsInfoShown] = React.useState(false);

  const projectTitle = title.split(' ').join('-').toLowerCase();
  
  return (
    <motion.div variants={projectVariant} className="relative" onClick={() => { setIsInfoShown(!isInfoShown) }}>
      <article className={overlayStyles}>
        <p className="text-2xl font-playfair">{title}</p>
        <p className="mt-7">
          {content}
        </p>
      </article>
      <figure>
        <img src={`../assets/${projectTitle}.jpeg`} alt={projectTitle} />
      </figure>
      {
        isInfoShown ?
        <ProjectInfo img={projectTitle} gitHub={true} gitHubLink={gitHubLink} demo={demo} demoLink={demoLink} />
        :
        null
      }
    </motion.div>
  )
};

Project.propTypes = {
  title: PropTypes.string.isRequired,
  projectVariant: PropTypes.object.isRequired,
  content: PropTypes.string.isRequired,
  gitHubLink: PropTypes.string.isRequired,
  demo: PropTypes.bool,
  demoLink: PropTypes.string,
};

export default Project;
