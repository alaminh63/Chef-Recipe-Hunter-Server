const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const information = require("./data/information.json");

app.get("/", (req, res) => {
  res.send("this custom server is running well");
});

app.get("/information", (req, res) => {
  res.send(information);
});

app.listen(port, () => {
  console.log(`this custom server in running port : ${port}`);
});
