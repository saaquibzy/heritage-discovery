const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());

const heritageSites = [
  { id: 1, name: 'Heritage Site A', location: '10.1234, 76.5678' },
  { id: 2, name: 'Heritage Site B', location: '11.5678, 77.1234' },
  { id: 3, name: 'Heritage Site C', location: '12.6789, 75.9876' }
];

// API to get heritage sites
app.get('/sites', (req, res) => {
  res.json(heritageSites);
});

app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});
