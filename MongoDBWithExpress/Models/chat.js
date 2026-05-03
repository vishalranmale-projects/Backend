const mongoose = require("mongoose");
// 4)Connect An Backend To An Specific Data
const connect = mongoose
  .connect("mongodb://localhost:27017/whatsapp")
  .then(() => {
    console.log("Connected To An Database");
  });

const chatScheema = new mongoose.Schema({
  from: {
    type: String,
    required: true,
  },
  to: {
    type: String,
    required: true,
  },
  msg: {
    type: String,
    maxlength: 50,
    required: true,
  },
  created_At: {
    type: Date,
    default: Date.now,
  },
  updated_At:{
    type:String,
  }
});

const Chats = new mongoose.model("Chats", chatScheema);
module.exports = Chats;
// let Chat1 = new Chats({
//   from: "Vishal",
//   to: "Aniket",
//   msg: "Hii How Are You?",
// });
// Chat1.save().then(() => {
//   console.log("Chat-1 is Saved To An Database");
// });

// Chats.find({}).then((res)=>{
//   console.log(res);
// })

