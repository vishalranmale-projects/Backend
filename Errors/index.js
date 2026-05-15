const express = require("express");
const app = express();
const ExpressError = require("./ExpressError");
app.listen(3000,()=>{
    console.log("Server Started");
});
// Custom Error 
// app.use((req, res,next) => {
//   if (req.query.check === "Approved") {
//     // ✅ End the request here
//     res.send("Okk!");
//   } else {
//     // ❌ Throw custom error → handled by error middleware
//     next(new ExpressError(404,"!Authentication Broke"));
//   }
  
// });
app.get("/test", (req, res) => {
  abcd = abcd;
});
app.get("/admin",(req,resp)=>{
    throw new ExpressError(403,"Access Is Forbidden For Some Time!");
})
app.use((err,req,resp,next)=>{
   resp.status(err.status).send(err.msg);
})
