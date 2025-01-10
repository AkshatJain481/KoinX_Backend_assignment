# KoinX Backend Assignment - Cryptocurrency Price Fetcher

This project is a backend service that fetches cryptocurrency data (Bitcoin, Matic, Ethereum) every 10 seconds, logs the execution time in seconds, and stores the latest cryptocurrency stats in a MongoDB database.

### **What It Does**

- **Fetches cryptocurrency data**: Every 2 hours, a background job that will fetch the current price in USD, market cap in USD and 24 hour change of 3 cryptocurrencies: Bitcoin, Matic, and Ethereum and store it in a database.
- **Two API Endpoints**:
  - **`/stats`**: Fetches the latest data about a requested cryptocurrency (Bitcoin, Matic, or Ethereum) including the price, market cap, and 24-hour change.
  - **`/deviation`**: Calculates and returns the standard deviation of the price of a requested cryptocurrency for the last 100 records stored in the database.

### **Features**

- Logs the execution time in seconds to the console.
- Runs every 10 seconds to fetch and store the cryptocurrency stats.
- Uses the CoinGecko API for retrieving cryptocurrency data.
- MongoDB is used to store the data.

### **Setup**

#### **1. Clone the Repository**

```bash
git clone <repository-url>
cd koinx-backend
```

#### **2. Install Dependencies**

```bash
npm install
```

#### **3. Configure MongoDB URI**

Make sure to configure your MongoDB URI in the `.env` file. You can use MongoDB Atlas or a local MongoDB server.

- Create a `.env` file in the root directory.
- Add the MongoDB URI to the `.env` file like this:
  ```
  MONGO_URI=<your-mongodb-uri>
  ```

#### **4. Run the Application**

To run the application and start the scheduled job:

```bash
npm run dev
```

This will start the server and the job will run every 10 seconds to fetch the cryptocurrency data and log the execution time.

### **Important Notes**

- Ensure your MongoDB instance is running and accessible.
- If using MongoDB Atlas, make sure the network access is configured properly for your IP.
