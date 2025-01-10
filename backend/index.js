const express = require("express");
const cassandra = require("cassandra-driver");
const path = require("path");
const { handleUserInput } = require("./controllers/dataController");
const cors = require("cors");
const { configDotenv } = require("dotenv");
configDotenv();

const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello sir! API is running fine.");
});

app.post("/", handleUserInput);

app.listen(PORT, () => {
  console.log(`app is running on ${PORT}`);
});
