const express = require("express")
const authorRoute = express.Router();


const {getAuthor , addAuthor , deleteArth, updetArth}  = require("../controler/author")


authorRoute.get("/author" , getAuthor)
authorRoute.post("/addAuthor" , addAuthor)
authorRoute.delete("/deleteAuthor/:id", deleteArth)
authorRoute.put("/updatAuthor/:id", updetArth)





module.exports = authorRoute