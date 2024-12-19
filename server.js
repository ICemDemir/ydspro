const mongoose = require("mongoose");

const dotenv = require("dotenv");
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
  });

const port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log(`App running on port ${port}`);
  console.log(process.env.NODE_ENV);
});
