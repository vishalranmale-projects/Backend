const { default: mongoose } = require("mongoose");
const moongose = require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/test").then(() => {
  console.log("Connection Sucessfull");
});

const userSchema = moongose.Schema({
  name: String,
  email: String,
  age: Number,
});

const user = moongose.model("user", userSchema);

// let documentOne = new user({
//   name: "Vishal",
//   email: "vishalranmale57@gmail.com",
//   age: 18,
// });
// documentOne.save();
// Insert An Multiple Documents In An Single Collection
// user
//   .insertMany([
//     { name: "Ranmale", email: "@67gmail.com", age: 32 },
//     { name: "Krushna Ranmale", emai: "kranmale", age: 17 },
//   ])
//   .then(() => {
//     console.log("Insertion Was Sucessful");
//   });
// let user2 = new user({
//   name: "Pratik Dhoke",
//   email: "vranmale57@gmail.com",
//   age: 29,
// });
// user2.save();
// user.find({ age: { $gt: 20 } }).then((data) => {
//   console.log(data);
// });

// user.findOne({ age: 29 }).then((data) => {
//   console.log(data);
// });

// user.findById("69eb762fe56dc9a57d4641ad").then((data) => {
//   console.log(data);
// });

// 2)Update
// i)Update One
// user.insertMany([
//   { name: "Vishal Ranmale", email: "vishalranmale57@gmail.com", age: 20 },
//   { name: "Vishal Ranmale", email: "vishalranmale57@gmail.com", age: 20 },
//   { name: "Tushar Pathare", email: "vishalranmale57@gmail.com", age: 21 },
//   { name: "Tanjir", email: "vishalranmale57@gmail.com", age: 22 },
//   { name: "Shamsher", email: "vishalranmale57@gmail.com", age: 22 },
// ]);

// 2)Update Many

// user
//   .updateMany({ age: { $gt: 20 } }, { email: "Bahadur Singh" })
//   .then((res) => {
//     console.log(res);
//   });

// 3)Find One And Update
// user.findOneAndUpdate({ name: "Vishal Ranmale" }, { age: 22 }).then((res) => {
//   console.log(res);
// });

// 4)findByIdAndUpdate()
// user.findByIdAndUpdate("69ec156902505b129a949f4f", { age: 30 }).then((res) => {
//   console.log(res);
// });

// 3)Delete An Document
// i)deleteOne()
// user.deleteOne({ name: "Vishal" }).then((res) => {
//   console.log(res);
// });

// ii)deleteMany()
// user.deleteMany({ name: "Vishal" }).then((res) => {
//   console.log(res);
// });
// user.findOneAndDelete();

// iii)findOneAndDelete()
// user.findOneAndDelete({ age: 30 }).then((res) => {
//   console.log(res);
// });
// iv)findByIdAndDelete()
// user.findByIdAndDelete("69ec156902505b129a949f51").then((res) => {
//   console.log(res);
// })

// 5)Schema Validation
