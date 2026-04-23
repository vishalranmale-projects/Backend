const mongoose = require("mongoose");

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/test");
}

main().then((rsp) => {
  console.log("Connection Sucessful");
});

let userSchema = new mongoose.Schema({
  name: String,
  email: String,
  age: Number,
});

const user = mongoose.model("user", userSchema);
console.log(user);

let user1 = new user();
user1.name = "Vishal";
user1.email = "Vishl57";
user1.age = 20;
let user2 = new user({
  name: "Kunal",
  email: "Junal",
});

user1.save();
user2.save();
