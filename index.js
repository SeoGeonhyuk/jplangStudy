const express = require('express');
const app = express();
const port = 80;

app.get('/', (req, res) => {
    res.send("Hello World!");
});

app.listen(port, () => {
    console.log("서버 실행중입니다.");
})