const express = require("express");
const CryptoData = require("../models/cryptoData");

const router = express.Router();

router.get("/stats", async (req, res) => {
  try {
    const { coin } = req.query;

    if (!coin)
      return res.status(400).json({ error: "Coin query param is required" });

    const data = await CryptoData.findOne({ coin }).sort({ timestamp: -1 });
    if (!data)
      return res
        .status(404)
        .json({ error: "No data found for the requested coin" });

    res.json({
      price: data.price,
      marketCap: data.marketCap,
      "24hChange": data.change24h,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
