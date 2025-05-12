const Navbar = () => {
  return (
    <header id="header" className="header d-flex align-items-center light-background sticky-top">
      <div className="container-fluid d-flex align-items-centercontainer-fluid position-relative d-flex align-items-center justify-content-between ">
        
        
        <div className="d-flex align-items-center">
          <a href="/" className="logo d-flex align-items-center me-auto me-xl-0">
            <h1 className="sitename ">ERJON.</h1>
          </a>
        </div>

       
        <div className="d-flex justify-content-center">
          <nav id="navmenu" className="navmenu">
            <ul className="d-flex justify-content-center gap-4 mb-0">
            <a
  href="#home"
  onClick={(e) => {
    e.preventDefault();
    if (window.scrollY > 0) {
      window.scrollTo({ top: 0, behavior: 'auto' });
    }
  }}
  style={{ cursor: 'pointer' }}
>
  Home
</a>

              <li><a href="#projects">My Project</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </nav>
        </div>

        {/* Social links */}
        <div className="header-social-links d-flex justify-content-end">
          <a href="https://www.linkedin.com/in/erjon-havolli-0147b1336/" target="_blank" rel="noreferrer">
            <i className='bx bxl-linkedin'></i>
          </a>
          <a href="https://github.com/erjonh-dev" target="_blank" rel="noreferrer">
            <i className="bx bxl-github"></i>
          </a>
        </div>
        
      </div>
    </header>
  );
};

export default Navbar;
