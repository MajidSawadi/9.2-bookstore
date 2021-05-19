const express = require('express');
const router = express.Router();

const authorsController = require("../controllers/authors.controller");

/* GET users listing. */
router.post("/", authorsController.createAuthor);
router.get("/:id", authorsController.getSingleAuthor);
router.put("/:id", authorsController.updateAuthor);
router.delete("/:id", authorsController.deleteAuthor);



module.exports = router;
