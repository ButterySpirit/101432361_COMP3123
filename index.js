// Import Express
const express = require('express');
const app = express();
const port = 3000;

// GET /hello - Returns "Hello Express JS" as plain text
app.get('/hello', (req, res) => {
  res.send('Hello Express JS');
});

// GET /user - Uses query string parameters (default: Pritesh, Patel)
app.get('/user', (req, res) => {
  const firstname = req.query.firstname || 'Nikola';
  const lastname = req.query.lastname || 'Varicak';
  res.json({ firstname, lastname });
});

// POST /user/:firstname/:lastname - Uses path parameters
app.post('/user/:firstname/:lastname', (req, res) => {
  const { firstname, lastname } = req.params;
  res.json({ firstname, lastname });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
