const express = require('express');
const path = require('path');
const app = express();
const server = require('http').createServer(app);
const port = 80;

import("node-fetch");

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