const mongoose = require("mongoose");
const user = require("./Models/user");
const Customers = require("./Models/Customer");
const Orders = require("./Models/Orders");
const instaUsers = require("./Models/instauser");
mongoose.connect('mongodb://127.0.0.1:27017/relationDemo').then(()=>{
    console.log("Connection Sucessful!")
});
const posts  = require("./Models/posts");


// Orders.insertMany([{
//     orderName:"Samosa",
//     price:20,
// },
// {
//     orderName:"Banana",
//     price:40,
// },
// {
//     orderName:"Chiku"
//     ,price:50,
// },
// {
//     orderName:"Panipuri"
//     ,price:35,
// }
// ]).then(()=>{
//     console.log("Orders Are Inserted !");
// });
// 

async function find(){
    let output =  await posts.find({}).populate("user")
console.log(output[1]);
}
find()

// Adding AN Data Into An Instagram Users Table
// let user1  = new instaUsers({
//     name:"Vishal Ranmale",
//     email:"vishalranmale57@gmail.com"
// });

// user1.save().then(()=>{
//     console.log("user1 Was Saved!");
// })

// posts.insertMany({
//    content:"Mumbai Pic",
//    likes:200,
//    user:'6a310932f494b5f19e85488a'
// },{
//      content:"Delhi pic",
//    likes:100,
//    user:'6a310932f494b5f19e85488a'
// },{
//       content:"Banglore pic",
//    likes:1000,
//    user:'6a310932f494b5f19e85488a'
// }).then(()=>{
//     console.log("Multiple Posts Are Saved!");
// })
