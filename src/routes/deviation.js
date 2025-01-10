const express = require("express");
const CryptoData = require("../models/cryptoData");

const router = express.Router();

router.get("/deviation", async (req, res) => {
  try {
    const { coin } = req.query;

    if (!coin)
      return res.status(400).json({ error: "Coin query param is required" });

    const records = await CryptoData.find({ coin })
      .sort({ timestamp: -1 })
      .limit(100);
    if (records.length < 2)
      return res.status(400).json({ error: "Not enough records in database for the coin!" });

    const prices = records.map((record) => record.price);
    const mean = prices.reduce((sum, price) => sum + price, 0) / prices.length;
    const variance =
      prices.reduce((sum, price) => sum + Math.pow(price - mean, 2), 0) /
      prices.length;
    const deviation = Math.sqrt(variance);

    res.json({ deviation: deviation.toFixed(2) });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
