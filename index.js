const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

const statsRouter = require("./src/routes/stats");
const deviationRouter = require("./src/routes/deviation");
const fetchPrices = require("./src/jobs/priceFetcher");

const app = express();
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
