const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = 3000;

// Middleware
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(__dirname)); // Serve all files from current dir

// Contact form route
app.post('/contact', (req, res) => {
  const { name, email, message } = req.body;
  console.log(`\n📩 New Contact Form Submission:
  Name: ${name}
  Email: ${email}
  Message: ${message}`);

  res.json({ success: true, message: "Thank you for contacting us!" });
});

// Start the server
app.listen(PORT, () => {
  console.log(`✅ Server is running at http://localhost:${PORT}`);
});
