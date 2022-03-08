const mongoose = require ("mongoose");

 const BookModels = new mongoose.Schema({
     title: {type: String},
     pages: {type: Number},
     price: {type: Number},
     img: {type: String}
 });

module.exports = mongoose.model("BookModels", BookModels)