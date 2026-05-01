import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function MyApplications() {
  const [applications, setApplications] = useState([]);

  // 🔗 fetch applied jobs
  useEffect(() => {
    fetch("http://localhost:5000/api/applications")
      .then((res) => res.json())
      .then((data) => setApplications(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <Navbar />

      <div className="container" style={{ color: "white" }}>
        <h1>My Applications</h1>

        {applications.length === 0 ? (
          <p>No applications found</p>
        ) : (
          applications.map((app) => (
            <div
              key={app._id}
              style={{
                border: "1px solid white",
                padding: "10px",
                margin: "10px 0",
                borderRadius: "10px",
              }}
            >
              <h3>{app.jobTitle}</h3>
              <p>Name: {app.name}</p>
              <p>Email: {app.email}</p>
            </div>
          ))
        )}
      </div>

      <Footer />
    </>
  );
}

export default MyApplications;