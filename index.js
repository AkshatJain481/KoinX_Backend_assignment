const express = require("express");
const mongoose = require("mongoose");
const rateLimit = require("express-rate-limit");
require("dotenv").config();

const statsRouter = require("./src/routes/stats");
const deviationRouter = require("./src/routes/deviation");
const fetchPrices = require("./src/jobs/priceFetcher");

const app = express();

const limiter = rateLimit({
  windowMs: 60 * 1000, // 1 minute
  max: 100, // limit each IP to 100 requests per windowMs
  message: {
    error: "Too many requests, please try again after a minute!",
  },
  standardHeaders: true,
  legacyHeaders: false,
});

app.use(limiter);

app.use(express.json());

app.use(statsRouter);
app.use(deviationRouter);

mongoose
  .connect(process.env.MONGO_URI, {
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB");
    fetchPrices(); // Initial fetch
    app.listen(process.env.PORT, () =>
      console.log(`Server running on port ${process.env.PORT || 3000}`)
    );
  })
  .catch((error) => console.error("MongoDB connection error:", error.message));
