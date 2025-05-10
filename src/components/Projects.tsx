import Project1 from '../assets/images/Project1.png';
import Project2 from '../assets/images/Project2.png';
import Project3 from '../assets/images/NewyorkTimeClone.png';

const Projects = () => {
  return (
    <section id="projects">
  <div className="container__title">
    <h2 className="projects-title">My Projects</h2>
    <p>"Below are some of the projects I have worked on."</p>
  </div>
  <div className="projects-container">
    <div className="project-card">
      <a href="https://github.com/HavolliErjon/VELARA.git" target="_blank">
        <figure className="progetto-figure">
          <img src={Project1} alt="Progetto 1" />
          <figcaption className="progetto-description">
            <h3>Velara</h3>
            <p>Velara simplifies HR management with features for hiring, payroll, employee records, and digital contracts. It streamlines processes, ensuring efficiency and compliance for modern businesses.</p>
          </figcaption>
        </figure>
      </a>
    </div>

    <div className="project-card">
      <a href="https://github.com/HavolliErjon/Counter" target="_blank">
        <figure className="progetto-figure">
          <img src={Project2} alt="Progetto 2" />
          <figcaption className="progetto-description">
            <h3>Counter</h3>
            <p>This is a web application that allows the user to increment and decrement a counter using the + and - buttons.</p>
          </figcaption>
        </figure>
      </a>
    </div>

    <div className="project-card">
      <a href="https://github.com/HavolliErjon/newyorktimes-clone" target="_blank">
        <figure className="progetto-figure">
          <img src={Project3} alt="Progetto 2" />
          <figcaption className="progetto-description">
            <h3>New york Times Clone</h3>
            <p>A React replica of The New York Times homepage, using the official API to display top articles by section, with a responsive, site-like interface.</p>
          </figcaption>
        </figure>
      </a>
    </div>
  </div>
</section>

  );
};

export default Projects;
