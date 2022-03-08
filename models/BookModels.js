const mongoose = require ("mongoose");

 const BookModels = new mongoose.Schema({
     title: {type: String},
     pages: {type: String},
     price: {type: String},
     img: {type: String}
 });

module.exports = mongoose.model("BookModels", BookModels)