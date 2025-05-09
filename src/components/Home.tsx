  import Background from '../assets/images/Background.jpg';

  const Home = () => {
    return (
      <section id="home" className="hero sections">
        <img src={Background} alt="Sfondo della home page" />
        <div className="container text-center">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <h2>Erjon Havolli</h2>
              <p>Junior Full stack Developer</p>
              <a href="#about" className="btn-get-started">About</a>
            </div>
          </div>
        </div>
      </section>
    );
  };

  export default Home;
