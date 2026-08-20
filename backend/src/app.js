/**
 * Express Application Setup
 *
 * This file creates and configures the Express app.
 * It does NOT start the server — that happens in server.js.
 */

const express = require("express");
const healthRoutes = require("./routes/healthRoutes");

const app = express();

// Middleware: parse incoming JSON request bodies (needed later for POST /api/translate)
app.use(express.json());

// Mount health routes under /api
app.use("/api", healthRoutes);

module.exports = app;
