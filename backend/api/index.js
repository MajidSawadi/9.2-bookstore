const express = require("express");
const router = express.Router();
const authorsRouter = require("./authors.api");

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

router.use("/authors", authorsRouter);
module.exports = router;
