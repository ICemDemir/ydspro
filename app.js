const express = require("express");

const app = express();

const PORT = process.env.PORT || 8000;

app.get("/", (req, res) => {
  res.send(`Hello from the server side on port ${PORT}`);
});

app.listen(PORT, () => {
  console.log(`App is running on port ${PORT}`);
});
