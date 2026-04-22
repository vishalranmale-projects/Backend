const { faker } = require("@faker-js/faker");
const sql = require("mysql2");
let ejs = require("ejs");
const express = require("express");
const app = express();
const methodOverride = require("method-override");
app.use(methodOverride("_method"));
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
//1)Now Using An Sql Object We First Connect An Mysql DB To An Node Modules
let connection = sql.createConnection({
  host: "localhost",
  user: "root",
  database: "NodeConnect",
  password: "root",
});

app.listen(3000, () => {
  console.log("Server Are Started At An Port 3000");
});
app.get("/", (req, resp) => {
  let totalusers;
  connection.query("select count(id) from user", (err, result) => {
    if (err) {
      resp.send(err);
    } else {
      console.log(result[0]["count(id)"]);
      let obj = result[0];
      resp.render("Home.ejs", { obj });
    }
  });
});

app.get("/user", (req, resp) => {
  connection.query("select id,username,email  from user", (err, result) => {
    if (err) {
      resp.send(err);
    } else {
      resp.render("allusers.ejs", { result });
    }
  });
});

app.get("/user/:id/edit", (req, resp) => {
  let id = req.params.id;
  resp.render("passcheck.ejs", { id });
});
app.patch("/user/:id/edit", (req, resp) => {
  let id = req.params.id;

  connection.query("select * from user where id=?", [id], (err, result) => {
    // EnterPass
    let Enteredpass = req.body.password;
    // Original Password
    let orgpass = result[0].pass;

    if (Enteredpass == orgpass) {
      // Update An Databace
      let newusername = req.body.username;

      connection.query(
        "update user set username=? where id = ?",
        [newusername, id],
        (err, res) => {
          if (res) {
            resp.redirect("http://localhost:3000/user");
          }
        },
      );
    } else {
      resp.send("Pass Wrong!");
    }
  });
});
app.delete("/user/:id/delete", (req, resp) => {
  let id = req.params.id;
  connection.query("delete from user where id=?", [id], (err, result) => {
    if (result) {
      resp.redirect("http://localhost:3000/user");
    } else {
      console.log(err);
    }
  });
});

app.get("/user/add", (req, resp) => {
  resp.render("adduser.ejs");
});

app.post("/user/add", (req, resp) => {
  let id = req.body.id;
  let username = req.body.username;
  let email = req.body.email;
  let password = req.body.password;
  connection.query(
    "insert into user values(?,?,?,?)",
    [id, username, email, password],
    (err, result) => {
      resp.redirect("http://localhost:3000/user");
    },
  );
});
