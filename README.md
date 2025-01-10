# KoinX Backend Assignment - Cryptocurrency Price Fetcher

This project is a backend service that fetches cryptocurrency data (Bitcoin, Matic, Ethereum) every 10 seconds, logs the execution time in seconds, and stores the latest cryptocurrency stats in a MongoDB database.

## Deployed URL

The application is deployed at: https://koinx-backend-assignment-le3j.onrender.com

### **What It Does**

- **Fetches cryptocurrency data**: Every 2 hours, a background job that will fetch the current price in USD, market cap in USD and 24 hour change of 3 cryptocurrencies: Bitcoin, Matic, and Ethereum and store it in a database.
- **Two API Endpoints**:
  - **`/stats`**: Fetches the latest data about a requested cryptocurrency (Bitcoin, Matic, or Ethereum) including the price, market cap, and 24-hour change.
  - **`/deviation`**: Calculates and returns the standard deviation of the price of a requested cryptocurrency for the last 100 records stored in the database.

### **Features**

- Every 2 hours, a background job that will fetch the current price in USD, market cap in USD and 24 hour change of 3 cryptocurrencies: Bitcoin, Matic, and Ethereum and store it in a database.
- Uses the CoinGecko API for retrieving cryptocurrency data.
- MongoDB is used to store the data.

### **Setup**

#### **1. Clone the Repository**

```bash
git clone https://github.com/AkshatJain481/KoinX_Backend_assignment.git
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

### **Testing the API**

You can test the deployed API endpoints using the following curl commands:

1. Get stats for Bitcoin:

```bash
curl --location 'https://koinx-backend-assignment-le3j.onrender.com/stats?coin=bitcoin' \
--header 'Content-Type: application/json'
```

2. Get price deviation for Bitcoin:

```bash
curl --location 'https://koinx-backend-assignment-le3j.onrender.com/deviation?coin=bitcoin' \
--header 'Content-Type: application/json'
```

### **Important Notes**

- Ensure your MongoDB instance is running and accessible.
- If using MongoDB Atlas, make sure the network access is configured properly for your IP.
