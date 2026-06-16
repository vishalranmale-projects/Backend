const mongoose = require("mongoose");

 let orderSchema = mongoose.Schema({
    orderName:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    }

 });
 module.exports = new mongoose.model("Orders",orderSchema);

