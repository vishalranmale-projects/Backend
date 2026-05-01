// 1)Importing An Express Module
const express = require("express");
//
// 2)Creating An Express App
const app = express();
const ejs = require("ejs");
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");
const Chats = require("./Models/chat");
// 3)Importing An moon
const mongoose = require("mongoose");
// 4)Connect An Backend To An Specific Data
const connect = mongoose
  .connect("mongodb://localhost:27017/whatsapp")
  .then(() => {
    console.log("Connected To An Database");
  });

app.listen(3000, () => {
  console.log("Connection Is Sucessful!");
});
app.get("/Chats", async (req, res) => {
  let AllChats = await Chats.find();
  res.render("AllChats.ejs", { AllChats });
});

app.get("/Chats/new", (req, resp) => {
  resp.render("newChat.ejs");
});

app.post("/Chats", (req, resp) => {
  let ChatUpd = new Chats({
    from: req.body.from,
    to: req.body.to,
    msg: req.body.msg,
    createdAt: new Date(),
  });
  ChatUpd.save();
  resp.redirect("http://localhost:3000/Chats");
});
