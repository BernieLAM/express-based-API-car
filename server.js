const express = require("express");
const app = express();
const miniCooper = require("./data.json");

// add id in item
miniCooper.forEach((model, index) => {
  model.id = index + 1;
});

app.use(express.json()); // it provides access to the body of the request, turns body into an object

// read route
app.get("/", (req, res) => {
  res.send(miniCooper);
});

// create a model
app.post("/", (req, res) => {
  req.body.id = miniCooper.length + 1; // add id as well when create a model
  miniCooper.push(req.body);
  res.send("model added");
}); // query

// delete a model
app.delete("/:id", (req, res) => {
  // /:id tell computer which one you delete // params

  const indexOf = miniCooper.findIndex(
    (model) => model.id === Number(req.params.id)
  ); // find the item

  if (indexOf >= 0) {
    // here is mean if indexOf find something
    miniCooper.splice(indexOf, 1);
    res.send("model deleted");
  } else {
    res.status(404).send("model not found");
  }
});

//update a model
app.put("/:id", (req, res) => {
  const indexOf = miniCooper.findIndex(
    (model) => model.id === Number(req.params.id)
  ); // find the item
  req.body.id = miniCooper.length; // add id as well when update a model

  if (indexOf >= 0) {
    // here is mean if indexOf find something
    miniCooper[indexOf] = req.body;
    res.send("model updated");
  } else {
    res.status(404).send("model not found");
  }
});

// start the server
const PORT = process.env.PORT || 6001; // use what the server says or if the server says nothing, use 6001
app.listen(PORT, () => {
  console.log(`server alive on port ${PORT}`);
});

// note: https://github.com/russell-gh/ft3-first-server/blob/main/server.js
