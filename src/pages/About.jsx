// src/pages/About.jsx
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function About() {
  return (
    <>
      <Navbar />

      <div className="page active">
        <div className="container">
          <div className="content-wrapper">

            {/* About Text */}
            <section className="about-content">
              <div className="about-text glass">
                <h2>About Our Vision</h2>
                <p>
                  We believe in creating digital experiences that feel natural and intuitive. 
                  Our glass morphism design philosophy combines transparency, depth, and subtle animations.
                </p>
                <p>
                  Founded in 2024, our team of designers and developers are passionate 
                  about pushing the boundaries of web design while maintaining accessibility and performance standards.
                </p>
                <p>
                  Every project we undertake is crafted with attention to detail, 
                  ensuring that form follows function while never compromising on aesthetic beauty.
                </p>
              </div>

              {/* Stats */}
              <div className="stats">
                <div className="stat-card glass">
                  <div className="stat-number">150+</div>
                  <div className="stat-label">Projects Completed</div>
                </div>
                <div className="stat-card glass">
                  <div className="stat-number">50+</div>
                  <div className="stat-label">Happy Clients</div>
                </div>
                <div className="stat-card glass">
                  <div className="stat-number">3</div>
                  <div className="stat-label">Years Experience</div>
                </div>
                <div className="stat-card glass">
                  <div className="stat-number">24/7</div>
                  <div className="stat-label">Support Available</div>
                </div>
              </div>
            </section>

          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default About;