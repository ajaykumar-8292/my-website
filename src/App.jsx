function App() {
  return (
    <div className="app">
      <nav className="navbar">
        <h2>WebNest</h2>

        <div className="nav-links">
          <a href="/">Home</a>
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <section className="hero">
        <h1>Welcome to WebNest</h1>

        <p>
          We create modern and professional websites
          for businesses and organizations.
        </p>

        <button>Get Started</button>
      </section>

      <section id="about" className="section">
        <h2>About Us</h2>
        <p>
          WebNest provides modern web development and
          digital solutions.
        </p>
      </section>

      <section id="services" className="section">
        <h2>Our Services</h2>

        <div className="cards">
          <div className="card">
            <h3>Web Development</h3>
            <p>Modern and responsive websites.</p>
          </div>

          <div className="card">
            <h3>Mobile Development</h3>
            <p>Mobile-friendly applications.</p>
          </div>

          <div className="card">
            <h3>Digital Solutions</h3>
            <p>Professional digital solutions.</p>
          </div>
        </div>
      </section>

      <section id="contact" className="section">
        <h2>Contact Us</h2>
        <p>Email: info@webnest.com</p>
      </section>

      <footer>
        <p>© 2026 WebNest. All Rights Reserved.</p>
      </footer>
    </div>
  );
}

export default App;