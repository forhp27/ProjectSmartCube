require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 3000;

// MongoDB connection
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Error connecting to MongoDB:', err));

// Define a schema
const envSchema = new mongoose.Schema({
  temperature: Number,
  humidity: Number,
});

// Create a model
const EnvData = mongoose.model('EnvData', envSchema);

// Create a route to fetch data
app.get('/data', async (req, res) => {
  try {
    const data = await EnvData.findOne(); // Fetch the latest document
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch data' });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
