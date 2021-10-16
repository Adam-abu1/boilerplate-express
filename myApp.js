var express = require("express");
var app = express();

app.use("/public", express.static(__dirname + "/public"));

app.get("/json", (req, res) => {
  if (process.env.MESSAGE_STYLE === "uppercase") {
    req.json({ message: "HELLO JSON" });
  } else {
    res.json({ message: "Hello json" });
    console.log(process.env.MESSAGE_STYLE);
  }
});

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/views/index.html");
});

module.exports = app;
