import React from 'react';

const icons = [
  {name: 'linkedin', link: 'https://linkedin.com'},
  {name: 'twitter', link: 'https://twitter.com'},
  {name: 'facebook', link: 'https://facebook.com'},
  {name: 'instagram', link: 'https://instagram.com'}
]

export const SocialMediaIcons = () => {
  return (
    <section className="flex justify-center md:justify-start my-10 gap-7">
      {
        icons.map((icon) => {
          return (
            <a 
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

export default SocialMediaIcons;
