var express = require("express");

var router = express.Router();

const usersController = require("../controllers/users.controller");

router.post("/", usersController.createUser);
router.get("/", usersController.getUser);

module.exports = router;
