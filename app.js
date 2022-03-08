const express = require("express");
const app = express();
require("./DB/db");
app.use(express.json());
const cors = require('cors')
app.use(cors())


////////////////////////////////////////

const bookRoute = require("./routers/route/bookRoute")
const authorRoute = require("./routers/route/authorRoute")


app.use(bookRoute)
app.use(authorRoute)




////////////////////////////////////////////////////
const Port = 5000;
app.listen(Port, () => {
  console.log("server run on 5000 port ");
});