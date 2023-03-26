const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");

const corsOptions = {
  origin: "*",
  credentials: true, //access-control-allow-credentials:true
  optionSuccessStatus: 200,
};

app.use(express.urlencoded({ extended: false }));
app.use(cors(corsOptions));

app.use(bodyParser.json());

app.post("/data", (req, res) => {
  const data = req.body;
  console.log("Received data:", data);
  res.json({ message: "Data received" });
});

app.listen(3000, () => {
  console.log("Server is listening on port 3000");
});
