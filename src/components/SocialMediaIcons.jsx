import PropTypes from 'prop-types';

export const SocialMediaIcons = ({icons = []}) => {
  return (
    <section className="flex justify-center md:justify-start my-10 gap-7">
      {
        icons.map((icon) => {
          return (
            <a
              key={icon.id}
              href={icon.link}
              className="hover:opacity-50 transition duration-500"
              target="_blank"
              rel="noreferrer"
            >
              <img src={`../assets/${icon.name}.png`} alt={`${icon.name}-link`} />
            </a>
          )
        })
      }
    </section>
  )
};

SocialMediaIcons.propTypes = {
  icons: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
  })).isRequired,
};

export default SocialMediaIcons;
