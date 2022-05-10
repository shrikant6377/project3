const booksModel = require("../models/bookModel");
const validator = require("validator");

const isValid = function(value){
    if(typeof (value) === 'undefined' || value === null) return false
    if(typeof (value) === 'string' && value.trim().length == 0) return false
    return true
}


let createBook = async function (req, res) {
    try {
        const data = req.body;
//--------------checking of data comes to body---------------
        if (!isValid(data.title)) {
             return res.status(400).send({ status: false, message: "title is Required" }) }
        if (!isValid(data.excerpt)) {
             return res.status(400).send({status: false, message: "Excerpt is Requird" }) }
        if (!isValid(data.userId)) {
             return res.status(400).send({ status: false, message: "User id required!" }) }
        if (!isValid(data.ISBN)) {
             return res.status(400).send({ status: false, message: "ISBN is required" }) }
        if (!isValid(data.category)) {
             return res.status(400).send({ status: false, message: "Category is Required" }) }
        if (!isValid(data.subcategory)) {
             return res.status(400).send({ status: false, message: "Subcategory is Required" }) }

        
// -----check duplicate data---------
        const duplicteTitle = await booksModel.findOne({ title: data.title })
        if (duplicteTitle) {
             return res.status(404).send({ status: false, message: "title already exists, title must be unique" }) }
        const duplicateISBN = await booksModel.findOne({ ISBN: data.ISBN })
        if (duplicateISBN) {
             return res.status(404).send({ status: false, message: "ISBN already exists, ISBN must be unique" }) }

        let savedData = await booksModel.create(data)
        res.status(201).send({ status: true, msg: 'created book sucssesfully', data: savedData })
    }
    catch (error) {
        return res.status(500).send({ msg: error.message })
    }
}

module.exports.createBook=createBook