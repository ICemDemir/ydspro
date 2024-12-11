const express = require("express");
const cors = require("cors");

// Starting the express app
const app = express();

//////// Global Middlewares ////////

// Implement cors
app.use(cors());

// Body parser
app.use(
  express.json({
    limit: "10kb",
  })
);

app.use(express.urlencoded({ extended: true, limit: "10kb" }));

app.get("/", (req, res) => {
  res.send("Hello from the server");
});

module.exports = app;
