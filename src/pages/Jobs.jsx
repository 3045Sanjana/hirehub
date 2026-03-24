import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Jobs() {
  const jobsData = [
    { title: "Frontend Developer", company: "Google", location: "Remote" },
    { title: "Backend Developer", company: "Amazon", location: "Bangalore" },
    { title: "UI Designer", company: "Adobe", location: "Mumbai" },
    { title: "React Developer", company: "Microsoft", location: "Hyderabad" },
    { title: "Node Developer", company: "Microsoft", location: "Pune" },
    { title: "MERN Developer", company: "TCS", location: "Indore" },
  ];

  const [search, setSearch] = useState("");

 
  const [showForm, setShowForm] = useState(false);
  const [selectedJob, setSelectedJob] = useState("");

  const filteredJobs = jobsData.filter((job) =>
    job.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <Navbar />

      <div className="page active">
        <div className="container">
          <div className="content-wrapper">

            <h1 style={{ color: "white" }}>Jobs</h1>

            {/* SEARCH INPUT */}
            <input
              type="text"
              placeholder="Search jobs..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              style={{
                padding: "10px",
                margin: "20px 0",
                width: "100%",
                borderRadius: "10px",
              }}
            />

            {/* JOB LIST */}
            <div className="features">
              {filteredJobs.map((job, index) => (
                <div key={index} className="feature-card glass">
                  <h3>{job.title}</h3>
                  <p>{job.company}</p>
                  <p>{job.location}</p>


                  <button
                    className="cta-button"
                    onClick={() => {
                      setShowForm(true);
                      setSelectedJob(job.title);
                    }}
                  >
                    Apply
                  </button>
                </div>
              ))}
            </div>

          
            {showForm && (
              <div style={{ marginTop: "30px", color: "white" }}>
                <h2>Apply for {selectedJob}</h2>

                <input
                  type="text"
                  placeholder="Your Name"
                  style={{ display: "block", margin: "10px 0", padding: "10px" }}
                />

                <input
                  type="email"
                  placeholder="Your Email"
                  style={{ display: "block", margin: "10px 0", padding: "10px" }}
                />

                <button
                  className="cta-button"
                  onClick={() => {
                    alert("Application Submitted ✅");
                    setShowForm(false);
                  }}
                >
                  Submit
                </button>
              </div>
            )}

          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Jobs;