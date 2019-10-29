//server.js
const express = require('express');
const favicon = require('express-favicon');
const path = require('path');
const port = process.env.PORT || 8080;
const app = express();
const mysql = require('mysql2');

const QUERY_SELECT_ALL_TEXTOS = "SELECT * FROM example.example;";

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'example',
    password: '123456789'
})

connection.connect(err => {
    if (err) {
        return err;
    }
})

app.use(favicon(__dirname + '/build/favicon.ico'));

app.use(express.static(__dirname));
app.use(express.static(path.join(__dirname, 'build')));

app.get('/ping', function (req, res) {
    connection.query(
        'SELECT * FROM example.example;',
        (err, results, fields) => {
            res.json({
                text: results
            });
        }
    );
});
app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});
app.listen(port, () => {
    console.log(`This port is connect on the port ${port}`);
});