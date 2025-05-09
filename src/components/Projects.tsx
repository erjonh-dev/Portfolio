import Project1 from '../assets/images/Project1.jpeg';
import Project2 from '../assets/images/Project2.jpeg';

const Projects = () => {
  return (
    <section id="projects">
  <div className="container__title">
    <h2 className="projects-title">My Projects</h2>
    <p>"Below are some of the projects I have worked on."</p>
  </div>
  <div className="projects-container">
    <div className="project-card">
      <a href="https://github.com/HavolliErjon/Progetto-Intro-Sviluppo.git" target="_blank">
        <figure className="progetto-figure">
          <img src={Project1} alt="Progetto 1" />
          <figcaption className="progetto-description">
            <h3>Hotel Pomelia</h3>
            <p>Landing page per un eco-hotel siciliano...</p>
          </figcaption>
        </figure>
      </a>
    </div>

    <div className="project-card">
      <a href="https://github.com/HavolliErjon/Progetto-Intro-Sviluppo.git" target="_blank">
        <figure className="progetto-figure">
          <img src={Project2} alt="Progetto 2" />
          <figcaption className="progetto-description">
            <h3>Hotel Pomelia</h3>
            <p>Landing page per un eco-hotel siciliano...</p>
          </figcaption>
        </figure>
      </a>
    </div>
  </div>
</section>

  );
};

export default Projects;
