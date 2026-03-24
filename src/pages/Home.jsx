import { useNavigate } from "react-router-dom"; 
import Navbar from "../components/Navbar";
import Footer from "../components/Footer"
import girlImg from "../assets/images/templatemo-futuristic-girl.jpg";

function Home() {
  const navigate = useNavigate(); 

  const goToJobs = () => {
    navigate("/jobs"); 
  };

  return (
    <>
      <Navbar />

      <div className="page active">
        <div className="container">
          <div className="content-wrapper">

            {/* HERO SECTION */}
            <section className="hero glass">
              
              <div className="hero-image">
                <img src={girlImg} alt="hero" />
              </div>

              <div className="hero-content">
                <h1>Find Your Dream Job</h1>
                <p>
                  Explore thousands of job opportunities with HireHub.
                  Your future starts here.
                </p>
                <button className="cta-button" onClick={goToJobs}>
                  Browse Jobs
                </button>
              </div>

            </section>

            {/* FEATURES SECTION */}
            <section className="features">
              
            </section>

          </div>
        </div>
      </div>
    </>
  );
}

export default Home;