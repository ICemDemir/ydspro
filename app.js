const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const grammarRouter = require("./routes/grammarRoutes");
const questionTypeRouter = require("./routes/questionTypeRoutes");

// Starting the express app
const app = express();

//////// Global Middlewares ////////
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

// Implement cors
app.use(cors());

// Body parser
app.use(
  express.json({
    limit: "10kb",
  })
);

app.use(express.urlencoded({ extended: true, limit: "10kb" }));

// Routes
app.get("/", (req, res) => {
  res.send("Hello from the server");
});

app.use("/api/v1/grammar", grammarRouter);
app.use("/api/v1/questiontypes", questionTypeRouter);

module.exports = app;
