const  express = require('express');
const router = express.Router();
const aws = require("aws-sdk")

//const express = require('express');
const userController = require("../controllers/userController")
const bookcontroller = require("../controllers/bookController")
const middlewares = require("../middlewares/auth")
const reviewController= require("../controllers/reviewController")
const awsController=require("../controllers/awsController")



router.post("/register",userController.createUser )
router.post("/login",userController.login )
//upload book cover---



//--------------authentication
router.post("/books",middlewares.authentication, bookcontroller.createBook)
router.get("/books",middlewares.authentication,bookcontroller.getBook)
router.get("/books/:bookId",middlewares.authentication,bookcontroller.getBooksById)
///---------authorization-----
router.put("/books/:bookId", middlewares.authentication,middlewares.authorization,bookcontroller.updateBooks)
router.delete("/books/:bookId",middlewares.authentication,middlewares.authorization,bookcontroller.deleteBook)
////---------reviews  routers--------/////
router.post("/books/:bookId/review",reviewController.createReview)
router.put("/books/:bookId/review/:reviewId",reviewController.updateReviews)
router.delete("/books/:bookId/review/:reviewId",reviewController.deleteReview)
router.post("/write-file-aws",awsController.sdk )
module.exports = router