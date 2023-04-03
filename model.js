const express = require("express");
const router = express.Router();

// read route
router.get("/", (req, res) => {
  res.send(req.miniCooper);
});

// create a model
router.post("/", (req, res) => {
  req.body.id = req.miniCooper.length + 1; // add id as well when create a model
  req.miniCooper.push(req.body);
  res.send("model added");
}); // query

// delete a model
router.delete("/:id", (req, res) => {
  // /:id tell computer which one you delete // params

  const indexOf = req.miniCooper.findIndex(
    (model) => model.id === Number(req.params.id)
  ); // find the item

  if (indexOf >= 0) {
    // here is mean if indexOf find something
    req.miniCooper.splice(indexOf, 1);
    res.send("model deleted");
  }
  res.status(404).send("model not found");
});

//update a model
router.put("/:id", (req, res) => {
  const indexOf = req.miniCooper.findIndex(
    (model) => model.id === Number(req.params.id)
  ); // find the item
  req.body.id = req.miniCooper.length; // add id as well when update a model

  if (indexOf >= 0) {
    // here is mean if indexOf find something
    req.miniCooper[indexOf] = req.body;
    res.send("model updated");
  }
  res.status(404).send("model not found");
});

module.exports = router;
