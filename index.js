const express = require('express')
const app = express()
app.use(express.json());
const fs = require("fs");

//static map pathing
app.use("/js", express.static("public/js"));
app.use("/css", express.static("public/css"));
app.use("/img", express.static("public/img"));
app.use("/html", express.static("public/html"));

//returns the main page
app.get("/", function(req, res) {
    res.send(fs.readFileSync("./public/html/main.html", "utf8"));
  });

  let port = process.env.PORT || 8000;
  app.listen(port);
  console.log("Listening on port " + port + "!");