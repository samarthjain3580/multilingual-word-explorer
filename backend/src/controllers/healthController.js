/**
 * Health Controller
 *
 * Handles the logic for the /api/health endpoint.
 * Controllers receive the request and send the response.
 */

function getHealth(req, res) {
  res.json({
    status: "OK",
  });
}

module.exports = {
  getHealth,
};
