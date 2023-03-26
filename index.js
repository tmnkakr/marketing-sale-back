const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const dbConnect = require("./database");

let port = process.env.port || 80;

const corsOptions = {
  origin: "*",
  credentials: true,
  optionSuccessStatus: 200,
};

app.use(express.urlencoded({ extended: false }));
app.use(cors(corsOptions));

app.use(bodyParser.json());

app.post("/data", async (req, res) => {
  const data = req.body;
  try {
    let conne = await dbConnect();
    let result = await conne.insertOne(data);
    if (result) {
      console.log("Data Inserted");
    } else console.log("Received Status Code other than 200");
  } catch (e) {
    console.error("Error ", e);
  }
  res.json({ message: "Data received" });
});
app.get("/data", async (req, res) => {
  res.json({ message: "Data received" });
});

app.listen(port, () => {
  console.log("Server is listening on port" + port);
});
