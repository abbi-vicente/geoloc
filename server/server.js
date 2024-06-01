require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
const userRoutes = require("./src/routes/user");

const app = express();

// Allow all origins
app.use(cors());

// Middleware
app.use(bodyParser.json());

// Database connection
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log(`Listening on port ${process.env.PORT} and connected to MongoDB`);
    });
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB: ", error.message);
  });

// Routes
app.use("/api/users", userRoutes);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});
