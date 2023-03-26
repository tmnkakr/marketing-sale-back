const { MongoClient } = require("mongodb");
const url =
  "mongodb+srv://user:bJX7jl0dIixuPJYT@marketingwebapp.vcafwfd.mongodb.net/?retryWrites=true&w=majority";

const client = new MongoClient(url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

async function dbConnect() {
  let result = await client.connect();
  db = result.db("database");
  return db.collection("saleBills");
}
var a = 4;
module.exports = dbConnect;
