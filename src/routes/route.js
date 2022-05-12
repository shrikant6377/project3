const  express = require('express');
const router = express.Router();

//const express = require('express');
const userController = require("../controllers/userController")
const bookcontroller = require("../controllers/bookController")
const middlewares = require("../middlewares/auth")

router.post("/register",userController.createUser )
router.post("/login",userController.login )
//--------------authentication
router.post("/books",middlewares.authentication, bookcontroller.createBook)
router.get("/books",middlewares.authentication,bookcontroller.getBook)
router.get("/books/:bookId",middlewares.authentication,bookcontroller.getBooksById)
///---------authorization-----
router.put("/books/:bookId", middlewares.authentication,middlewares.authorization,bookcontroller.updateBooks)
router.delete("/books/:bookId",middlewares.authentication,middlewares.authorization,bookcontroller.deleteBook)



module.exports = router