const express = require("express");
const app = express();

app.use("/static", express.static("public"));
app.set("view engine", "ejs");
const dotenv = require('dotenv');
const mongoose = require("mongoose");

dotenv.config();

app.use(express.urlencoded({ extended: true }));

//connection to db
mongoose.set("useFindAndModify", false);


mongoose.connect(process.env.DB_CONNECT, { useNewUrlParser: true }, () => {
console.log("Connected to db!");
app.listen(3000, () => console.log("Server Up and running"));
});


app.listen(3000, () => console.log("Server Up and running"));



app.set("view engine", "ejs");

// GET METHOD
app.get("/", (req, res) => {
    TodoTask.find({}, (err, tasks) => {
    res.render("todo.ejs", { todoTasks: tasks });
    });
    });

//post method
app.post("/", (req, res) => {
  console.log(req.body);
});