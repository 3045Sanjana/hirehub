import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Contact() {
  const [resume, setResume] = useState(null);

  const handleResume = (e) => {
    const file = e.target.files[0];
    if (file) {
      setResume(file);
      alert(`Resume Selected: ${file.name}`);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you! Your message is sent.\nResume: ${resume ? resume.name : "Not uploaded"}`);
  };

  return (
    <>
      <Navbar />

      <div className="page active">
        <div className="container">
          <div className="content-wrapper glass" style={{ padding: "40px", maxWidth: "500px", margin: "50px auto" }}>
            
            <h2 style={{ color: "white", marginBottom: "20px" }}>Contact & Upload Resume</h2>
            
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="Your Name"
                required
                style={{ width: "100%", padding: "12px", marginBottom: "15px", borderRadius: "10px" }}
              />
              <input
                type="email"
                placeholder="Your Email"
                required
                style={{ width: "100%", padding: "12px", marginBottom: "15px", borderRadius: "10px" }}
              />
              <textarea
                placeholder="Your Message"
                required
                style={{ width: "100%", padding: "12px", marginBottom: "15px", borderRadius: "10px", minHeight: "100px" }}
              />
              <input
                type="file"
                accept=".pdf,.doc,.docx"
                onChange={handleResume}
                style={{ marginBottom: "20px" }}
              />
              <button
                type="submit"
                className="cta-button"
                style={{ width: "100%" }}
              >
                Send Message
              </button>
            </form>

          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Contact;