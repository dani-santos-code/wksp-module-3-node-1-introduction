const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send(
    '<h1 style="color: red;">This is my server</h1><p>Yay!!!</p> Check out <a href="/bacon/">bacon!</a>'
  );
});

app.get("/bacon", (req, res) => {
  res.send('<h1 style="color: blue;">Bacon page</h1><p>🥓</p>');
});

app.listen(4000, () =>
  console.log("Listening on port 4000!\nCheck http://localhost:4000/")
);
