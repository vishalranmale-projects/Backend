const express = require("express");
const app = express();
const morgon = require("morgan");



app.listen(3000,()=>{
    console.log("Console.log Server I Started Sucessfully!");
})

// Creating An Useful Middleware

app.use((req,response,next)=>{
    req.time = Date.now();
    console.log(req.method,req.hostname,req.path,req.time);
    next();
});
app.get("/",(req,resp)=>{
    resp.send("Welcome To Home!");
    console.log(req.body);
})
// Middleware With An Routing
app.use("/home",((req,resp,next)=>{
    console.log("Home");
    next();
}));
app.get("/home",(req,resp)=>{
    resp.send("Welcome to Home2!");
});

app.use("/api",(req,resp,next)=>{
    if(req.query.securitycheck ==="approved!"){
      next();
    }
    else{
        resp.send("Not Approved!");
    }
});
app.use("/api",(req,resp)=>{
resp.send("Approved!");
})
    
