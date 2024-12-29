const asyncHandler = require("express-async-handler");

// @desc Get all contacts
// @route GET /api/contancts
// @access public

const getContacts = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "get all users" });
});

// @desc Create new contacts
// @route POST /api/contancts
// @access public
const createContact = asyncHandler(async (req, res) => {
  console.log("The request body is :", req.body);
  const { name, email } = req.body;
  if (!name || !email) {
    res.status(400);
    throw new Error("All fields are mandatory");
  }
  res.status(201).json({ message: "create Contact" });
});

// @desc Get contacts
// @route GET /api/contancts
// @access public

const getContact = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Get contact for  ${req.params.id}` });
});

// @desc update contacts
// @route PUT /api/contancts
// @access public
const updateContact = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Update contact for  ${req.params.id}` });
});

// @desc update contacts
// @route PUT /api/contancts
// @access public
const deleteContact = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Delete contact for ${req.params.id}` });
});

module.exports = {
  getContacts,
  createContact,
  getContact,
  updateContact,
  deleteContact,
};
