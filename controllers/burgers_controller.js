const express = require("express");

const router = express.Router();

// Import the model (cat.js) to use its database functions.
const burgers = require("../models/burger");