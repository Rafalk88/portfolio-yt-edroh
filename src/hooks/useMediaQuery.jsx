import React from 'react';

export const useMediaQuery = (query) => {
  const [matches, setMatches] = React.useState(false);

  React.useEffect(() => {
    const media = window.matchMedia(query);
    if (media !== matches) {
      setMatches(media.matches)
    };
    const listener = () => setMatches(media.matches);
    window.addEventListener("resize", listener);
    return window.removeEventListener("resize", listener);
  }, [matches, query]);

  return matches;
}

export default useMediaQuery;
