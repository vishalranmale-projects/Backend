const { default: mongoose, Schema } = require("mongoose");

let SwiggyUser = mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    Orders:[
        {
            type:Schema.Types.ObjectId,
            ref:"Orders"
        }
    ]
});

module.exports = new mongoose.model("Customer",SwiggyUser);

