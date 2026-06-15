const express  =require("express");
const app  = express();
const error = require("./ExpressError.js");
const ExpressError = require("./ExpressError.js");

app.listen(3000,(req,resp)=>{
    console.log("Server is Started!");
})

app.get("/",(req,resp)=>{
    let Check = req.query.Sec;
    if(Check == "Vishal"){
        resp.send("Access Completed");
    }
    else{
        throw new error("Invalid Login",501);
    }
    req.params == id_ID;
});
app.get("/admin",(req,resp)=>{
    throw new ExpressError("Admin is Not Authorized!",403);
})

app.use((err,req,resp,next)=>{
    resp.status(err.code).send(err.message);
})

// WrapAsync
