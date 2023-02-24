import { motion } from 'framer-motion';

const overlayStyles = `absolute h-full w-full opacity-0 hover:opacity-90 transition duration-500
    bg-grey z-30 flex flex-col justify-center items-center text-center p-16 text-deep-blue`;

export const Project = ({ title = '', projectVariant = {} }) => {
  const projectTitle = title.split(' ').join('-').toLowerCase();
  
  return (
    <motion.div variants={projectVariant} className="relative">
      <div className={overlayStyles}>
        <p className="text-2xl font-playfair">{title}</p>
        <p className="mt-7">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint minima temporibus nesciunt illo voluptatum 
          pariatur ex asperiores vel deserunt voluptates
        </p>
      </div>
      <img src={`../assets/${projectTitle}.jpeg`} alt={projectTitle} />
    </motion.div>
  )
};

export default Project;