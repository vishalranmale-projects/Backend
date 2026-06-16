const mongoose = require("mongoose");
const user = require("./Models/user");
const Orders = require("./Models/Orders");
const instaUsers = require("./Models/instauser");
mongoose.connect('mongodb://127.0.0.1:27017/relationDemo').then(()=>{
    console.log("Connection Sucessful!")
});
const posts  = require("./Models/posts");
let customerSchema = mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    Orders:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"Orders"
        }
    ]
});
customerSchema.post("findOneAndDelete",async(data)=>{
    for(let i=0;i<data.Orders.length;i++){
        await Orders.findByIdAndDelete(data.Orders[i]._id).then(()=>{
            console.log("Orders Associated With An Karan Arjun Was Deleted!");
        })
    }
})

 const Customers = new mongoose.model("Customer",customerSchema);
async function deleteCustomer(){
   await Customers.deleteOne({name:"Karan Arjun"}).then(()=>{
        console.log("Karan Arjun Was Deleted !");
    })
}
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

// async function find(){
//     let output =  await posts.find({}).populate("user")
// console.log(output[1]);
// }
// find()

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

// Function To Add An Customer Along With An Order

// async function  AddCust(){
//  let cust1 = new Customers({
//     name:"Karan Arjun",
//  });

//  let Order1 = new Orders({
//     orderName : "pavBhaji",
//     price:200
//  });
//  cust1.Orders.push(Order1);
//   await Order1.save().then(()=>{
//     console.log("Order1 Was Stored Sucessfully!");
//  });
//   await cust1.save().then(()=>{
//     console.log("Cust1 Was Saved");
//  })
// }
// AddCust();

// Query Middleware For An Customer Model

// Function To Delete An Particular Customer Document

async function deleteDoc(){
    await Customers.findByIdAndDelete("6a314cd5176c8117ddf0f94b").then(()=>{
        console.log("The Karan Arjun Was Deleted!");
    })
}
deleteDoc()

