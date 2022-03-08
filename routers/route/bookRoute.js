const express = require("express")
const bookRoute = express.Router();


const { bookInfo , addBook ,oneBook,deleteBook , addComment , deleteComment , rating} = require("../controler/book")


bookRoute.get("/books"  , bookInfo)
bookRoute.post("/addbook"  , addBook)

bookRoute.get("/book/:id" , oneBook)
bookRoute.delete("/book/:id"  , deleteBook)





module.exports = bookRoute
