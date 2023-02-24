import React from 'react';

const icons = [
  {id: 1, name: 'linkedin', link: 'https://linkedin.com'},
  {id: 2, name: 'twitter', link: 'https://twitter.com'},
  {id: 3, name: 'facebook', link: 'https://facebook.com'},
  {id: 4, name: 'instagram', link: 'https://instagram.com'}
]

export const SocialMediaIcons = () => {
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

export default SocialMediaIcons;
