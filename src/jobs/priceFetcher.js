const schedule = require("node-schedule");
const CryptoData = require("../models/cryptoData");
const { fetchCryptoData } = require("../utils/coingeckoClient");

const fetchPrices = async () => {
  try {
    const coins = ["bitcoin", "matic-network", "ethereum"];
    const data = await fetchCryptoData(coins);

    const records = Object.keys(data).map((coin) => ({
      coin,
      price: data[coin].usd,
      marketCap: data[coin].usd_market_cap,
      change24h: data[coin].usd_24h_change,
      timestamp: new Date(),
    }));

    await CryptoData.insertMany(records);
    console.log("Data fetched and stored successfully!");
  } catch (error) {
    console.error("Error fetching prices:", error.message);
  }
};

// Schedule the job
schedule.scheduleJob("0 */2 * * *", fetchPrices);

module.exports = fetchPrices;
