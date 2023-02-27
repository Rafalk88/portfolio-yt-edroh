import PropTypes from 'prop-types';

export const ProjectInfo = ({ img='', gitHub, gitHubLink, demo, demoLink }) => {
  return (
    <article className="fixed top-0 left-0 bg-grey/50 h-full w-full 
      z-40 cursor-pointer flex justify-center items-center">
      <div className="p-4 bg-white mx-2 sm:mx-0">
        <figure>
          <img
            src={`../assets/${img}.jpeg`}
            alt={img}
            className="md:w-[600px] md:h-[600px]"
          />
        </figure>
        <div className="flex justify-around">
          {
            gitHub ?
            <a
              className="p-5 bg-red font-semibold text-white mt-5 hover:bg-yellow
                transition duration-500 z-45"
              href={gitHubLink}
              target="_blank"
              rel="noreferrer"
            >
              Go to GitHub
            </a>
            :
            null
          }

          {
            demo ?
            <a
              className="p-5 bg-blue font-semibold text-white mt-5 hover:bg-yellow
              transition duration-500 z-45"
              href={demoLink}
              target="_blank"
              rel="noreferrer"
            >
              Watch demo
            </a>
            :
            null
          }
        </div>
      </div>
    </article>
  )
};

ProjectInfo.propTypes = {
  img: PropTypes.string,
  gitHub: PropTypes.bool.isRequired,
  gitHubLink: PropTypes.string.isRequired,
  demo: PropTypes.bool,
  demoLink: PropTypes.string,
};

export default ProjectInfo;
