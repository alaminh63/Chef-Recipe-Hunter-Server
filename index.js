const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 3000;
const information = require("./data/information.json");

app.use(cors());

app.get("/", (req, res) => {
  res.send("this custom server is running well");
});

app.get("/information", (req, res) => {
  res.send(information);
});


app.get("/information/:id", (req, res) => {
  const id = req.params.id;
  console.log(id);
  const selectedChef = information.find((c) => c.id === id);
  res.send(selectedChef);
});

app.listen(port, () => {
  console.log(`this custom server in running port : ${port}`);
});
