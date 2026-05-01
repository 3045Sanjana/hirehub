import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function About() {
  return (
    <>
      <Navbar />

      <div className="page active">
        <div className="container">
          <div className="content-wrapper">

            {/* About Section */}
            <section className="about-content">

              <div className="about-text glass">
                <h2>About HireHub</h2>

                <p>
                  HireHub is a modern job portal designed to connect talented job seekers 
                  with top companies. Our platform allows users to easily search, apply, 
                  and track job opportunities in one place.
                </p>

                <p>
                  We focus on creating a smooth and simple experience for both job seekers 
                  and recruiters, making the hiring process faster and more efficient.
                </p>

                <p>
                  Whether you are looking for your first job or planning your next career move, 
                  HireHub helps you find the right opportunity.
                </p>
              </div>

              {/* Stats Section */}
              <div className="stats">

                <div className="stat-card glass">
                  <div className="stat-number">100+</div>
                  <div className="stat-label">Jobs Available</div>
                </div>

                <div className="stat-card glass">
                  <div className="stat-number">50+</div>
                  <div className="stat-label">Companies</div>
                </div>

                <div className="stat-card glass">
                  <div className="stat-number">500+</div>
                  <div className="stat-label">Applications</div>
                </div>

                <div className="stat-card glass">
                  <div className="stat-number">24/7</div>
                  <div className="stat-label">Support</div>
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