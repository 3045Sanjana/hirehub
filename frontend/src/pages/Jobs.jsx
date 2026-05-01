import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Jobs() {
  const [jobsData, setJobsData] = useState([]);
  const [search, setSearch] = useState("");
  const [showForm, setShowForm] = useState(false);
  const [selectedJob, setSelectedJob] = useState("");

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  // 🔗 Fetch jobs from backend
  useEffect(() => {
    fetch("http://localhost:5000/api/jobs")
      .then((res) => {
        if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
        return res.json();
      })
      .then((data) => {
        console.log("✅ Jobs fetched:", data);
        setJobsData(data);
      })
      .catch((err) => {
        console.error("❌ Error fetching jobs:", err);
        alert("Failed to load jobs. Check console and backend.");
      });
  }, []);

  const filteredJobs = jobsData.filter((job) =>
    job.title.toLowerCase().includes(search.toLowerCase())
  );

  // 🔥 Apply function (backend connect)
  const handleApply = async () => {
    console.log("CLICKED", name, email, selectedJob);

    try {
      const res = await fetch("http://localhost:5000/api/applications", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: name,
          email: email,
          jobTitle: selectedJob,
        }),
      });

      const data = await res.json();
      console.log("SAVED:", data);

      alert("Application Submitted ✅");

      setShowForm(false);
      setName("");
      setEmail("");
    } catch (err) {
      console.log("ERROR:", err);
    }
  };

  return (
    <>
      <Navbar />

      <div className="page active">
        <div className="container">
          <div className="content-wrapper">

            <h1 style={{ color: "white" }}>Jobs</h1>

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

            <div className="features">
              {filteredJobs.map((job) => (
                <div key={job._id} className="feature-card glass">
                  <h3>{job.title}</h3>
                  <p>{job.company}</p>
                  <p>{job.location}</p>

                  <button
  type="button"
  className="cta-button"
  style={{
    width: "110px",
    padding: "6px 10px",
    fontSize: "14px",
    marginTop: "15px"
  }}
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
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  style={{ display: "block", margin: "10px 0", padding: "10px" }}
                />

                <input
                  type="email"
                  placeholder="Your Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  style={{ display: "block", margin: "10px 0", padding: "10px" }}
                />

               <button
  type="button"
  className="cta-button"
  style={{
    width: "110px",
    padding: "6px 10px",
    fontSize: "14px"
  }}
  onClick={handleApply}
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