import PropTypes from 'prop-types';
import AnchorLink from 'react-anchor-link-smooth-scroll';

export const Link = ({page, selectedPage, setSelectedPage, isMenuToggled, setIsMenuToggled, screen}) => {
  const lowerCasePage = page.toLowerCase();

  return (
    screen === 'big' ?
    <AnchorLink 
    className={`${
      selectedPage === lowerCasePage ? "text-yellow" : ""
    } hover:text-yellow transition duration-500`}
      href={`#${lowerCasePage}`}
      onClick={() => {
        setSelectedPage(lowerCasePage)
      }}
    >
      {page}
    </AnchorLink>
    :
    <AnchorLink 
    className={`${
      selectedPage === lowerCasePage ? "text-yellow" : ""
    } hover:text-yellow transition duration-500`}
      href={`#${lowerCasePage}`}
      onClick={() => {
        setSelectedPage(lowerCasePage)
        setIsMenuToggled(!isMenuToggled)
      }}
    >
      {page}
    </AnchorLink>
  )
};

Link.propTypes = {
  page: PropTypes.string.isRequired,
  selectedPage: PropTypes.string.isRequired,
  setSelectedPage: PropTypes.func.isRequired,
  isMenuToggled: PropTypes.bool,
  setIsMenuToggled: PropTypes.func,
  screen: PropTypes.string.isRequired,
};

export default Link