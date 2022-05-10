const  express = require('express');
const router = express.Router();

//const express = require('express');
const userController = require("../controllers/userController")
const bookcontroller = require("../controllers/bookController")
const middlewares = require("../middlewares/auth")

router.post("/register",userController.createUser )
router.post("/login",userController.login )
router.post("/books",middlewares.authentication, bookcontroller.createBook)


module.exports = router