const mongoose = require("mongoose");

// Connect to backend database
mongoose.set("strictQuery", false);
mongoose
  .connect("mongodb://localhost:27017/whatsapp")
  .then(() => {
    console.log("Connected To Database");
  })
  .catch((err) => {
    console.error("Connection error:", err);
  });

const Chats = require("./Models/chat");

Chats.insertMany([
  {
    from: "Vishal",
    to: "Aniket",
    msg: "Hii How Are You?",
    createdAt: new Date(),
  },
  {
    from: "Aniket",
    to: "Vishal",
    msg: "Hii I Am Fine!",
    createdAt: new Date(),
  },
  {
    from: "Vishal",
    to: "Mayuri",
    msg: "Hii Mayuri How Are You?",
    createdAt: new Date(),
  },
  {
    from: "Mayuri",
    to: "Vishal",
    msg: "Hii Vishal I Am Fine!",
    createdAt: new Date(),
  },
  {
    from: "Aniket",
    to: "Mayuri",
    msg: "Hii Mayuri How Are You?",
    createdAt: new Date(),
  },
]).then((res) => {
  console.log("Inserted chats:", res);
});
