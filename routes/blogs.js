var express = require("express");
var router = express.Router();

router.get("/hello-blogs", (req, res) => {
  res.json({ message: "Hello from express!" });
});

module.exports = router;
