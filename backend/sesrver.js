const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
const userRoutes = require("./routes/userRoutes");

dotenv.config();

const PORT = process.env.PORT || 5000;

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB is Connected"))
  .catch((err) => {
    console.log("MongoDB is not connected");
    message: err.message;
  });

// Routes
app.use("/api/users", userRoutes);

// Home Routes
app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "Wellcome to home route",
  });
});

// Error handling middleware
app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.json({
    success: false,
    message: err.message || "Something went wrong!",
  });
});

// 404 - Not Found middleware
app.use((req, res, next) => {
  res.status(404).json({
    success: false,
    message: "Route not found",
  });
});

// Start the server

app.listen(PORT, () => {
  console.log(`Server is successfully running at http://localhost:${PORT}`);
});
