import React from 'react';

export const SocialMediaIcons = () => {
  return (
    <section className="flex justify-center md:justify-start my-10 gap-7">
      <a 
        href="https://linkedin.com"
        className="hover:opacity-50 transition duration-500"
        target="_blank"
        rel="noreferrer"
      >
        <img src="../assets/linkedin.png" alt="linkedin-link" />
      </a>
    </section>
  )
};

export default SocialMediaIcons;
