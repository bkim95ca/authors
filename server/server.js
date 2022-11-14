const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 8000;
const DB = "authors"

app.use(cors())
app.use(express.json(), express.urlencoded({extended: true}));

//CONNECT TO DB
require("./config/mongoose.config")(DB)

//modularize routes
require("./routes/author.routes")(app)

//START THE SERVER
app.listen(PORT, () => console.log(`>> server up on ${PORT} <<`))