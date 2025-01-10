const axios = require("axios");

const BASE_URL = "https://api.coingecko.com/api/v3";

/**
 * Fetch cryptocurrency data from CoinGecko.
 * @param {string[]} coinIds - List of CoinGecko IDs for the coins to fetch (e.g., ['bitcoin', 'matic-network']).
 * @returns {Promise<object>} - Returns the fetched data as an object.
 */
const fetchCryptoData = async (coinIds) => {
  try {
    const response = await axios.get(`${BASE_URL}/simple/price`, {
      params: {
        ids: coinIds.join(","),
        vs_currencies: "usd",
        include_market_cap: true,
        include_24hr_change: true,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching data from CoinGecko:", error.message);
    throw new Error("Failed to fetch cryptocurrency data");
  }
};

module.exports = {
  fetchCryptoData,
};
