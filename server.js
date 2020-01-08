// Create express app
var express = require("express")
var app = express()
var db = require("./database.js")

// Server port
var http_port = 8000

// Start server
app.listen(http_port, () => {
    console.log("Server running on port %PORT%!".replace("%PORT%", http_port))
});

// Root endpoint
app.get("/", (req, res, next) => {
    res.json({"message":"Ok"})
});

// Get a list of all users
app.get("/api/users", (req, res, next) => {
    var sql = "select * from user"
    var params = []
    db.all(sql, params, (err, rows) => {
        if(err) {
            res.status(400).json({"error":err.message})
            return
        }
        res.json({
            "message":"success",
            "data":rows
        })
    });
});


// DEfault response for any other request
app.use(function(req, res) {
    res.status(404)
});
