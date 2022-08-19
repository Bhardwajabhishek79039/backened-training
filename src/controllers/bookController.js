const {count } = require("console")
const BookModel= require("../models/bookModel")

const createBook= async function (req, res) {
    let data= req.body

    let savedData= await BookModel.create(data)
    res.send({msg: savedData})
}

const booklist= async function (req, res) {

    let savedData= await BookModel.find().select( { bookName: 1, authorName: 1, _id: 0}).count()
    res.send({msg: savedData})
}

module.exports.createBook= createBOook
module.exports.getBooksData= getBookData