/**
 * Server Entry Point
 *
 * This file starts the backend server.
 * Think of it as the "on switch" for our application.
 */

require("dotenv").config();

const app = require("./src/app");

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
