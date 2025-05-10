import portrait from '../assets/images/portrait.jpg';
import { Carousel } from 'react-bootstrap';

const About = () => {
  return (
    <section id="about" className="about section py-5">
      <div className="container">

        <div className="about-container shadow-lg p-5 rounded light-background">
          <div className="row gy-4 justify-content-center align-items-center">
            <div className="col-lg-3 text-center">

              <div className="inline-block p-2">
                <img 
                  src={portrait} 
                  className="img-fluid rounded-circle border-0" 
                  alt="Portrait of Erjon Havolli" 
                  style={{
                    boxShadow: '0 0 80px 40px rgba(0, 0, 0, 0.05)'
                  }}
                />
              </div>
            </div>
            <div className="col-lg-6 content text-center text-lg-start">
              <h2 className="fw-bold">Junior Full stack Developer</h2>
              <p className="fst-italic py-3">
                "Passionate about building modern web experiences and always eager to learn and grow."
              </p>
            </div>
          </div>

        
          <div className="row justify-content-center mt-5">
            <div className="col-lg-8">
              <Carousel>
                
                <Carousel.Item>
                  <div className="certificate-box p-4 rounded shadow bg-light text-center">
                    <h3 className="fw-bold mb-2">Full Stack Development</h3>
                    <p className="text-muted mb-1">Start2Impact</p>
                    <p className="mb-3">
                      Completed in May 2025, this certification covers various aspects of Full Stack Web Development, from front-end to back-end technologies.
                    </p>
                    <div className="mt-3 d-flex flex-wrap gap-2 justify-content-center justify-content-lg-start">
                      <span className="badge bg-dark">React</span>
                      <span className="badge bg-dark">Node.js</span>
                      <span className="badge bg-dark">Express</span>
                      <span className="badge bg-dark">MongoDB</span>
                      <span className="badge bg-dark">RESTful APIs</span>
                    </div>
                    <a 
                      href="https://www.start2impact.academy/certification/ErjonHavolli" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="btn btn-outline-primary mt-4"
                    >
                      View Certificate 📜
                    </a>
                  </div>
                </Carousel.Item>

                
                <Carousel.Item>
                  <div className="certificate-box p-4 rounded shadow bg-light text-center">
                    <h3 className="fw-bold mb-2">Responsive Web Design</h3>
                    <p className="text-muted mb-1">FreeCodeCamp</p>
                    <p className="mb-3">
                      Completed in October 2024, this certification covers HTML, CSS, responsive layouts, and accessibility best practices through hands-on projects.
                    </p>
                    <a 
                      href="https://www.freecodecamp.org/certification/ErjonHavolli/responsive-web-design" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="btn btn-outline-primary"
                    >
                      View Certificate 📜
                    </a>
                  </div>
                </Carousel.Item>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
