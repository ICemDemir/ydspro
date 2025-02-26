const mongoose = require("mongoose");
const dotenv = require("dotenv");

process.on("uncaughtException", (err) => {
  console.error("Uncaught Exception! Shutting down...");
  console.error(err);
  process.exit(1);
});

dotenv.config({ path: "./config.env" });

const app = require("./app");

const DB = process.env.DATABASE.replace(
  "<db_password>",
  process.env.DB_PASSWORD
);

mongoose
  .connect(DB)
  .then(() => console.log("DB connection successful"))
  .catch((err) => {
    console.error("DB connection error", err.message);
    process.exit(1);
  });

const port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log(`App running on port ${port}`);
  console.log(process.env.NODE_ENV);
});

// Global handler for unhandled promise rejections
process.on("unhandledRejection", (err) => {
  console.error("Unhandled Rejection! Shutting down...");
  console.error(err);
  server.close(() => process.exit(1));
});
