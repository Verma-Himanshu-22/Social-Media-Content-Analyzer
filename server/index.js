const express = require("express");
const cors = require("cors");
require("dotenv").config();

const analysisRoutes = require("./routes/analysis.routes");

const app = express();
const PORT = process.env.PORT || 5001;

// --- CORS Configuration ---
// Define the list of allowed origins (front-end URLs)

const allowedOrigins = [
  "http://localhost:5173",
  "http://localhost:3000",
  process.env.FRONTEND_URL,
];

const corsOptions = {
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));

app.use(express.json());

app.use("/api/analyze", analysisRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
