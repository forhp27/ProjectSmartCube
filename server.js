require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");

const app = express();
const PORT = 5000;

// Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("Error connecting to MongoDB:", err));

// Define schema and model for "sensor_readings" collection
const sensorSchema = new mongoose.Schema(
  {
    temperature: Number,
    humidity: Number,
    timestamp: Date, // Ensure timestamp is part of the schema
  },
  { collection: "sensor_readings" } // Explicitly specify the collection name
);

const SensorReading = mongoose.model("SensorReading", sensorSchema);

// Cache for the latest sensor data
let latestSensorData = null;

// Query MongoDB every 5 seconds and update the cache
setInterval(async () => {
  try {
    //const latestData = await SensorReading.findOne().sort({ timestamp: -1 }); // Get the most recent entry
    const latestData = await SensorReading.findOne().sort({ _id: -1 }); // Sort by _id if timestamp isn't available
    if (latestData) {
      latestSensorData = latestData; // Update the cache
      console.log("Updated cache with most recent data:", latestSensorData);
    } else {
      console.log("No data found in the collection.");
    }
  } catch (err) {
    console.error("Error fetching data in setInterval:", err);
  }
}, 5000); // Run every 5 seconds

// Route to get the latest data from the cache
app.get("/data", (req, res) => {
  if (latestSensorData) {
    res.json(latestSensorData);
  } else {
    res.status(404).json({ error: "No data available" });
  }
});

app.get("/", (req, res) => {
  res.send("Hello from MongoDB!");
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://10.100.16.119:${PORT}`);
});
