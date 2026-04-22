const Express = require("express");
const app = Express();
const path = require("path");
app.use(Express.static("public"));
// i)Psaaing AN Actual Templates As Responce When An Any Request Are There!
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));
app.use(Express.static(path.join("public")));
app.get("/", (req, resp) => {
  resp.render("home.ejs");
});
app.listen(3000, () => {
  console.log("Server Started!");
});

// ii)Passing An Data To An EJS Files
app.get("/rooldice", (resq, resp) => {
  let data = Math.floor(Math.random() * 6);
  resp.render("rolldice.ejs", { Diceval: data });
});

// iV)Conditional Statements At An EJS File
app.get("/rollDice", (req, resp) => {
  let Val = Math.floor(Math.random() * 6);
  resp.render("rolldice", { Val });
});
app.get("/followers", (req, resp) => {
  let followers = [
    "Vishal Ranmale",
    "Tushar Pathare",
    "Mayur Daware",
    "Komal Shinde",
    "Hari Shinde",
  ];
  resp.render("follwer", {
    followers,
  });
});

// v)Instagram Project
const instaData = require("./data.json");

app.get("/ig/:username", (req, resp) => {
  let userdata = instaData[req.params.username];
  if (userdata) {
    resp.render("insta.ejs", { userdata });
  } else {
    resp.send("User Not Listed!");
  }
});
