const mysql = require('mysql');

const conn = mysql.createConnection({
    host: "localhost",
    port: "3000",
    user: "root",
    database: "activities",
    password: "root"
});

conn.connect(function (err) {
    if (err) {
        return console.error("Ошибка: " + err.message);
    }
    else {
        console.log("Connected to Mysql Server");
    }
});