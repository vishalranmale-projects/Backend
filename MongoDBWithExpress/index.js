// 1)Importing An Express Module
const express = require("express");
const methodOverride = require("method-override");
const ExpressErrors = require("./ExpressError");


// 2)Creating An Express App
const app = express();
app.use(methodOverride("_method"));
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
  try{
 let AllChats = await Chats.find();
  }
  catch(err){
    next(err);
  }
 
  res.render("AllChats.ejs", { AllChats });
});

app.get("/Chats/new", (req, resp) => {
  resp.render("newChat.ejs");
});

app.post("/Chats", async(req, resp,next) => {
  try{
     let ChatUpd = new Chats({
    from: req.body.from,
    to: req.body.to,
    msg: req.body.msg2,
    createdAt: new Date(),
     });
   await ChatUpd.save();
  }
  catch(err){
    next( new ExpressErrors("Please Fill The All The Mandatory Fields!",403));
  }
  
});
app.get("/Chats/:id/edit", (req, resp) => {
  let id = req.params.id;
  resp.render("edit.ejs", { id });
});

app.put("/Chats/:id", async(req, resp) => {
  let id = req.params.id;
  let Msg = req.body.UpdatedMsg;
  try{
 await Chats.updateOne({ _id: id }, {$set:{msg:Msg} },{updated_At:new Date().toString().split(" ")[4]});
  resp.redirect("/Chats");
  }
  catch(err){
   resp.send(err.message);
  }
});

app.delete("/Chats/:id",async(req,resp)=>{
  let id = req.params.id;
  try{
 await Chats.deleteOne({_id:id})
  }
  catch(err){
    next(err);
  }
  resp.redirect("/Chats");
  })

  app.delete("/Chats/deleteAll",(req,resp)=>{
    resp.send("All Deleted!");
  });
  app.get("/Chats/:id/Show",async(req,resp,next)=>{
   let id = req.params.id;
   let chat = await Chats.findById(id);
    if(chat){
      resp.render("show.ejs",{chat});
    }
    else{
      
   throw new ExpressErrors("The id U Are Finding is Invalid!",403);
      next(err);
    }
  });

  app.use((err,req,resp,next)=>{
  let {status=500,message = "Some Error"} = err;
  resp.status(status).send(message);
  });
