import { FaLinkedin, FaGithub } from 'react-icons/fa'; 

const Footer = () => {
  return (
    <footer id="footer" className="footer light-background">
      <section className="social">
        <div className="icon">
          <a href="https://www.linkedin.com/in/erjon-havolli-0147b1336/">
            <FaLinkedin size={30} />
          </a>
          <a href="https://github.com/HavolliErjon">
            <FaGithub size={30} />
          </a>
        </div>
      </section>
      <div className="mt-20">
        <p>
          <strong> © Erjon Havolli.</strong> All rights reserved.
          
        </p>
      </div>
    </footer>
  );
};

export default Footer;
