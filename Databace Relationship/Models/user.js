const mongoose = require("mongoose");
let AddresSchema = mongoose.Schema({
    
    location:{
        type:String
    },
    city:{
        type:String
    }
})
let userSchema = mongoose.Schema({
   
    name:{
       type:String,
       required:true,
    },
    mobileNo:{
        type:Number,
         required:true
    },
    addresses:[
        AddresSchema
    
]
        
    
   
});
module.exports= new mongoose.model("userModel",userSchema);
