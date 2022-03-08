const { number } = require("joi")
const mongoose = require("mongoose")

const AuthorModels =  new mongoose.Schema({
    name:{type: String},
    age: {type: Number},
    nationalty: {type: String},
    img: {type: String},
    gender: {type: String},
    books:{type: String}
});

module.exports = mongoose.model("AuthorModels", AuthorModels);