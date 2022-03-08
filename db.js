const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/Books").then(
              //أنشأنا  قاعدة بيانات 
  () => { 
    console.log("DB connected");
  },
  (err) => {
    console.log(err);
  }
);