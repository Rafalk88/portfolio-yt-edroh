import SocialMediaIcons from '../components/SocialMediaIcons';
import { icons } from '../scenes/Landing';

export const Footer = () => {
  return (
    <footer className="h-64 bg-red pt-10">
      <section className="w-5/6 mx-auto">
        <SocialMediaIcons icons={icons}/>
        <article className="md:flex justify-center md:justify-between text-center">
          <p className="font-playfair font-semibold text-2xl text-yellow">JANE ESPER</p>
          <p className="font-playfair text-md text-yellow">©2023 ESPER. All Rights Reserved.</p>
        </article>
      </section>
    </footer>
  )
};

export default Footer;
