const express = require("express");
const router = express.Router();

const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date(),
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date(),
  },
];

router.get("/", (req, res) => {
  res.render("index", {
    messages,
  });
});
router.get("/new", (req, res) => {
  res.render("form");
});
router.post("/new", (req, res) => {
  if (!req.body.name || !req.body.text) {
    res.status(400).json({msg: `Please enter a name and text`})
  } else {
    messages.push({
      text: req.body.text,
      user: req.body.name,
      added: new Date(),
    });
    res.redirect('/')
  }
});

module.exports = router;
