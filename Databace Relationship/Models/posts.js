const mongoose = require("mongoose");
let postSchema = mongoose.Schema({
    content:{
        type:String,
        require:true
    },
    likes:{
        type:Number,
        require:true
    },
    user:
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"instaUsers"
        }
    
});

module.exports  = new mongoose.model("posts",postSchema);