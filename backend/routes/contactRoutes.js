const express = require("express");
const router = express.Router();
const {
  createContact,
  getAllContacts,
} = require("../controllers/contactController");

// Save contact message
router.post("/", createContact);

// Get all contact messages
router.get("/", getAllContacts);

module.exports = router;
