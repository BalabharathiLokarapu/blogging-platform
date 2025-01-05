// server.js
const express = require('express');
const app = express();

// Middleware to parse JSON data
app.use(express.json());

// Example route
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

// Define the port the server will listen on
const PORT = process.env.PORT || 5000;

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
