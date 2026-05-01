const Application = require("../models/Application");

// apply job
exports.applyJob = async (req, res) => {
  try {
    console.log("BODY:", req.body); // 👈 ये देखना है

    const application = await Application.create(req.body);
    res.status(201).json(application);
  } catch (err) {
    console.log("ERROR:", err);
    res.status(500).json({ message: err.message });
  }
};

// get applications
exports.getApplications = async (req, res) => {
  try {
    const data = await Application.find();
    res.json(data);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};