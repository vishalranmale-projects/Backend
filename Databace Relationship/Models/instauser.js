const mongoose = require("mongoose");
let instaUserSchema = mongoose.Schema({
    name:{
        type:String,
        required:true
    }
    ,
    email:{
        type:String,
        required:true
    }
});

let instaUsers = new mongoose.model("instaUsers",instaUserSchema);
 module.exports = instaUsers;