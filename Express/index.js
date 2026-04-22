//1)Request & Responce
// const express = require("express");
// const app = express();

// app.listen(3000, () => {
//   console.log("Server is Listning");
// });

// app.use((req, res) => {
//   res.send("<h1>My First Responce From An Server!</h1>");
// });

// 2)Routing(According To An Request An Particular Responce Is Send)
// let express = require("express");
// let app = express();

// app.listen(3000, () => {
//   console.log("Server is Started!");
// });

// app.get("/Vishal", (req, res) => {
//   res.send({
//     name: "vishal",
//     height: "6.5f",
//     weight: "75",
//   });
// });
// app.get("/Vishnu", (req, res) => {
//   res.send({
//     name: "Vishal",
//     height: "6f",
//     weight: "95kg",
//   });
// });
// app.get("/Komal", (req, res) => {
//   res.send({
//     name: "komal",
//     height: "5f",
//     weight: "35kg",
//   });
// });

// 3)path Parameters
// const express = require("express");
// const app = express();

// app.listen(3000, () => {
//   console.log("Server is Listning");
// });

// app.get("/:username", (req, resp) => {
//   let data = req.params;
//   resp.send(data);
// });

// 4)String Parameters