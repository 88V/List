const express = require("express");
const app = express();

app.use("/static", express.static("public"));
app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: true }));
//get
app.get("/", (req, res) => {
  res.render("todo.ejs");
});

//post method
app.post("/", (req, res) => {
  console.log(req.body);
});

const mongoose = require("mongoose");
//connection to db
mongoose.set("useFindAndModify", false);
mongoose.connect(process.env.DB_CONNECT, { useNewUrlParser: true }, () => {
console.log("Connected to db!");
app.listen(3000, () => console.log("Server Up and running"));
});


const dotenv = require(“dotenv”);
dotenv.config();


app.listen(3000, () => console.log("Server Up and running"));
