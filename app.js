const express = require("express");
const cors = require("cors");
const morgan = require("morgan");

const AppError = require("./utils/appError");
const globalErrorHandler = require("./controllers/errorController");
const grammarRouter = require("./routes/grammarRoutes");
const questionTypeRouter = require("./routes/questionTypeRoutes");
const downloadablesRouter = require("./routes/downloadablesRoutes");
const readingRouter = require("./routes/readingRoutes");
const vocabularyRouter = require("./routes/vocabularyRoutes");

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
app.use("/api/v1/downloadables", downloadablesRouter);
app.use("/api/v1/reading", readingRouter);
app.use("/api/v1/vocabulary", vocabularyRouter);

app.all("*", (req, res, next) => {
  next(new AppError(`Can't find ${req.originalUrl} on this server`, 404));
});

app.use(globalErrorHandler);

module.exports = app;
