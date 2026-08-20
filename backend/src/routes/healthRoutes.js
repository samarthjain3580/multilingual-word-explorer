/**
 * Health Routes
 *
 * Defines URLs related to server health checks.
 * Routes connect a URL + HTTP method to a controller function.
 */

const express = require("express");
const { getHealth } = require("../controllers/healthController");

const router = express.Router();

// GET /api/health
router.get("/health", getHealth);

module.exports = router;
