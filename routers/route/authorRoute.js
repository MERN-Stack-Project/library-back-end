const express = require("express")
const authorRoute = express.Router();


const {getAuthor , addAuthor}  = require("../controler/author")


authorRoute.get("/author" , getAuthor)
authorRoute.post("addAuthor" , addAuthor)






module.exports = authorRoute