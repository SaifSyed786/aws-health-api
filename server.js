// A very simple Express server with one health-check endpoint.
const express = require('express');

const app = express();
const PORT = 3000;

// GET /health - lets us check if the server is up and running.
app.get('/health', (req, res) => {
  res.status(200).json({ status: 'healthy' });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
