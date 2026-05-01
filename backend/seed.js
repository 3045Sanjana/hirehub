require("dotenv").config();
const mongoose = require("mongoose");
const Job = require("./models/Job");

const sampleJobs = [
  {
    title: "Senior React Developer",
    company: "TechCorp",
    location: "New York, NY",
    salary: "$120,000 - $150,000",
    description: "Looking for experienced React developer with 5+ years experience"
  },
  {
    title: "Full Stack Developer",
    company: "StartupXYZ",
    location: "San Francisco, CA",
    salary: "$100,000 - $130,000",
    description: "Build web applications using Node.js and React"
  },
  {
    title: "Backend Engineer",
    company: "DataSystems",
    location: "Remote",
    salary: "$110,000 - $140,000",
    description: "Develop scalable backend systems using Node.js and MongoDB"
  },
  {
    title: "Frontend Developer",
    company: "DesignStudio",
    location: "Los Angeles, CA",
    salary: "$90,000 - $120,000",
    description: "Create beautiful UI with React and Tailwind CSS"
  },
  {
    title: "DevOps Engineer",
    company: "CloudInc",
    location: "Remote",
    salary: "$130,000 - $160,000",
    description: "Manage cloud infrastructure and CI/CD pipelines"
  }
];

async function seedDatabase() {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB Connected ✅");

    // Clear existing jobs
    await Job.deleteMany({});
    console.log("Existing jobs deleted");

    // Insert sample jobs
    const result = await Job.insertMany(sampleJobs);
    console.log(`✅ ${result.length} jobs added to database!`);

    mongoose.connection.close();
    process.exit(0);
  } catch (error) {
    console.error("❌ Error:", error.message);
    process.exit(1);
  }
}

seedDatabase();
