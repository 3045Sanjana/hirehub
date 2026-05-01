import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Contact() {
  const [resume, setResume] = useState(null);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  // 📂 Resume select
  const handleResume = (e) => {
    const file = e.target.files[0];
    if (file) {
      setResume(file);
    }
  };

  // ✏️ Input change
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // 🚀 Submit (backend connect ready)
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      console.log("Saved:", data);

      alert("Message sent successfully ✅");

      // reset
      setFormData({
        name: "",
        email: "",
        message: "",
      });
      setResume(null);
    } catch (err) {
      console.log(err);
      alert("Error sending message ❌");
    }
  };

  return (
    <>
      <Navbar />

      <div className="page active">
        <div className="container">
          <div
            className="content-wrapper glass"
            style={{ padding: "40px", maxWidth: "500px", margin: "50px auto" }}
          >
            <h2 style={{ color: "white", marginBottom: "20px" }}>
              Contact & Upload Resume
            </h2>

            <form onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
                style={{
                  width: "100%",
                  padding: "12px",
                  marginBottom: "15px",
                  borderRadius: "10px",
                }}
              />

              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
                style={{
                  width: "100%",
                  padding: "12px",
                  marginBottom: "15px",
                  borderRadius: "10px",
                }}
              />

              <textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                required
                style={{
                  width: "100%",
                  padding: "12px",
                  marginBottom: "15px",
                  borderRadius: "10px",
                  minHeight: "100px",
                }}
              />

              <input
                type="file"
                accept=".pdf,.doc,.docx"
                onChange={handleResume}
                style={{ marginBottom: "10px" }}
              />

              {/* 📄 Show selected file */}
              {resume && (
                <p style={{ color: "white" }}>
                  Selected: {resume.name}
                </p>
              )}

              <button
                type="submit"
                className="cta-button"
                style={{ padding: "10px 30px", marginTop: "20px" }}
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