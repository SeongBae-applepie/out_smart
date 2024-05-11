const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const path = require("path");
var fs = require("fs");
const mysql = require("mysql2");
const dbconfig = require("./public/config/db_config.js");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname + "/public")));
app.use(express.static(path.join("./public")));

var port = 3010;

//home
app.get("/", function (req, res) {
  console.log("in");
  res.sendFile(__dirname + "/public/html/index.html");
});

app.get("/input", function (req, res) {
  console.log("input");
  res.sendFile(__dirname + "/public/html/input.html");
});

app.get("/get_db", function (req, res) {
  console.log("get_db");
  const conn = mysql.createConnection(dbconfig);
  conn.connect(); // mysql과 연결.appendChild();
  var sql = "select * from data1";

  conn.query(sql, function (err, rows, fields) {
    if (err) {
      console.error("error connecting: " + err.stack);
    }
    res.send(rows);
  });
  conn.end();
});

//사용자 생성 post
app.post("/set_post", function (req, res) {
  console.log("Post_C");
  console.log(req.body);

  const conn = mysql.createConnection(dbconfig);
  conn.connect(); // mysql과 연결

  var sql = `INSERT INTO data1 (Tem_A, Tem_W, Hum, PH, EC, Light, Q) VALUE ('${req.body.Tem_A}','${req.body.Tem_W}','${req.body.Hum}','${req.body.PH}','${req.body.EC}','${req.body.Light}','${req.body.Q}')`;

  conn.query(sql, function (err, rows, fields) {
    if (err) {
      console.error("error connecting: " + err.stack);
    }

    res.send(rows);
  });
  conn.end();
});

app.listen(port, () => {
  //클라이언트 대기
  console.log("listening on ??? *:" + port);
});
