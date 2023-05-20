const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, 'dist')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

// Serve files from the root directory
app.use(express.static(path.join(__dirname)));

// Serve the pspdf_index.js file from the root directory
app.use('/pspdf_index.js', express.static(path.join(__dirname, 'pspdf_index.js')));

// Serve the assets/pspdfkit.js file
app.use('/assets', express.static(path.join(__dirname, 'assets')));

const port = 3000;
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
