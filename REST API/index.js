const express = require("express");
const app = express();
const path = require("path");
const methodOverride = require("method-override");
let { v4: uuidv4 } = require("uuid");
console.log(uuidv4());
app.use(methodOverride("_method"));
app.listen(3000, () => {
  console.log("Server is Listening!");
});
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
let Databace = [
  {
    username: "Vishal Ranmale",
    content: "I Am An MERN Stack Developer!",
    id: "1c",
  },
  {
    username: "Mayur Mhaske",
    content: "I Am An MERN Stack Developer!",
    id: uuidv4(),
  },
  {
    username: "Kunal Shinde",
    content: "I Am An MERN Stack Developer!",
    id: uuidv4(),
  },
];
app.set("view engine", "ejs");
app.get("/Posts", (req, resp) => {
  resp.render("posts.ejs", { Databace });
});

app.get("/Posts/New", (req, resp) => {
  resp.render("form.ejs");
});
app.post("/Posts/New", (req, resp) => {
  let data = req.body;
  Object.assign(data, { id: uuidv4() });
  Databace.push(data);
  resp.redirect("http://localhost:3000/Posts");
});
app.post("/Posts/:id", (req, resp) => {
  let id = req.params.id;
  let Upcontent = req.body.content;
  for (let i = 0; i < Databace.length; i++) {
    if (Databace[i].id == id) {
      Databace[i].content = Upcontent;
    }
  }
});

app.get("/Posts/:id", (req, resp) => {
  let idclient = req.params.id;
  for (let i = 0; i < Databace.length; i++) {
    if (Databace[i].id == idclient) {
      let UserData = Databace[i];
      resp.render("user.ejs", { UserData });
    }
  }
});

app.get("/Posts/:id/Edit", (req, resp) => {
  let userid = req.params;
  resp.render("Edit.EJS", { userid });
});

app.put("/Posts/:id/Edit", (req, resp) => {
  let id = req.params.id;
  let Data1 = req.body.username;
  let Data2 = req.body.content;
  for (let i = 0; i < Databace.length; i++) {
    if (Databace[i].id == id) {
      //Update
      Databace[i].username = Data1;
      Databace[i].content = Data2;
    }
  }
  resp.redirect("http://localhost:3000/Posts");
});
app.delete("/Posts/:id", (req, resp) => {
  let id = req.params.id;
  for (let i = 0; i < Databace.length; i++) {
    if (Databace[i].id == id) {
      Databace.splice(i, 1);
    }
  }
  resp.redirect("http://localhost:3000/Posts");
});
