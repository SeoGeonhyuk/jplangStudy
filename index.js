const express = require('express');
const path = require('path');
const app = express();
const fs = require('fs-extra');
const csv = require('csv-parser');
const Database = require('better-sqlite3');
const db = new Database('./db/jplang.db');
db.exec(`DROP TABLE IF EXISTS jpchars`);
db.exec(`CREATE TABLE IF NOT EXISTS jpchars (id INTEGER PRIMARY KEY, hanza TEXT, mean_sound TEXT)`);
const server = require('http').createServer(app);

const port = 80;

import("node-fetch");

function initDatabase(){
    fs.createReadStream('./db/sangyong.csv')
      .pipe(csv({
        separator: ','
      }))
      .on('data', (row) => {
        let cursor = db.prepare(`insert into jpchars (hanza, mean_sound) values (?, ?)`);
        console.log(row.hanza);
        cursor.run(row.hanza, row.mean_sound);
        })
      .on('end', () => {
        console.log("데이터 삽입 완료");
      });
}

initDatabase();
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, "./public/html/home.html"));
});

app.get('/multiple', (req, res) => {
    res.sendFile(path.join(__dirname, "./public/html/multiple.html"));
});

app.get('/single', (req, res) => {
    res.sendFile(path.join(__dirname, "./public/html/single.html"));
});

app.get('/home', (req, res) => {
    res.redirect('/');
})

app.use("/api/char", require("./routes/character"));

server.listen(port, () => {
    console.log("서버 실행중입니다.");
})