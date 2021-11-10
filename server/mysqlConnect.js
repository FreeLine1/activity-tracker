const PORT = 3006
const dotenv = require('dotenv')
const cors = require('cors')
const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const mysql = require("mysql2");

app.use(cors());
app.use(bodyParser.urlencoded({extended: false}))

const connection = mysql.createConnection({
    host: "localhost",
    port: "3306",
    user: "root",
    database: "activities",
    password: "rootroot"
});


connection.connect(function(err){
    if (err) {
        return console.error("cant connect to mySQL " + err.message);
    }
    else{
        console.log("successful connected to mySQL");
    }
});

app.use(bodyParser.json())

app.post('/', (req, res) => {
    const sql = `INSERT INTO activities (start_time , finish_time, distance ,activity) VALUES (\"${req.body.start}\" , \"${req.body.finish}\" , \"${req.body.distance}\" , \"${req.body.activity}\")`
    connection.query(sql, (err, result) => {
        if(err) console.log(err);
        else console.log("Data successfully sent");
    })

    res.json('Server for tracker')
})

app.get('/records', function(req, res) {
    connection.execute("SELECT MAX(distance) AS distance FROM activities.activities WHERE activity = \"Ride\"",

        function (err, results, fields) {
            console.log(err);
            // console.log(results);
            let distanceRide = results;
            connection.execute("SELECT MAX(distance) AS distance FROM activities.activities WHERE activity = \"Run\"",

                function (err, results, fields) {
                    console.log(err);
                    // console.log(results);
                    res.send({distanceRide, distanceRun : results})
                });
        });

})

app.get('/total', function(req, res) {
    connection.execute("SELECT SUM(distance) AS totalDistanceRide FROM activities.activities WHERE activity = \"Ride\";",

        function (err, results, fields) {
            console.log(err);
            // console.log(results);
            let totalDistanceRide = results;
            connection.execute("SELECT SUM(distance) AS totalDistanceRun FROM activities.activities WHERE activity = \"Run\";",

                function (err, results, fields) {
                    console.log(err);
                    // console.log(results);
                    res.send({totalDistanceRide, totalDistanceRun : results})

                });
        });

})

app.get('/recent', function(req, res) {
    connection.execute("SELECT * FROM activities.activities",
        function (err, results, fields) {
            console.log(err);
            // console.log(results);
            res.send(results)
        });
})


app.listen(PORT, () => console.log(`server running on PORT ${PORT}`))