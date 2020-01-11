// Create express app
var express = require("express")
var app = express()
var db = require("./database.js")
var bodyParser = require("body-parser");


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

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

// GET all groupIDs
app.get("/api/groupids", (req, res, next) => {
    var sql = "select * from groupIDs"
    var params = []
    db.all(sql, params, (err, rows) => {
        if (err) {
            res.status(400).json({"error":err.message});
            return;
        }
        res.json({
            "data":rows
        })
    });
});

// GET all items
app.get("/api/items", (req, res, next) => {
    var sql = "select * from items"
    var params = []
    db.all(sql, params, (err, rows) => {
        if (err) {
            res.status(400).json({"error":err.message});
            return;
        }
        res.json({
            "data":rows
        })
    });
});

// GET all groupLinks
app.get("/api/groupLinks", (req, res, next) => {
    var sql = "select * from groupLinks"
    var params = []
    db.all(sql, params, (err, rows) => {
        if (err) {
            res.status(400).json({"error":err.message});
            return;
        }
        res.json({
            "data":rows
        })
    });
});

// GET the userTemplate
app.get("/api/userTemplate", (req, res, next) => {
    var sql = "select * from userTemplate"
    var params = []
    db.all(sql, params, (err, rows) => {
        if (err) {
            res.status(400).json({"error":err.message});
            return;
        }
        res.json({
            "data":rows
        })
    });
});

// GET the userData
app.get("/api/userData", (req, res, next) => {
    var sql = "select * from userData"
    var params = []
    db.all(sql, params, (err, rows) => {
        if (err) {
            res.status(400).json({"error":err.message});
            return;
        }
        res.json({
            "data":rows
        })
    });
});

// POST new cls-userData
app.post("/api/userData", (req, res, next) => {
    var data = {
        firstUsed: req.body.firstUsed,
        useTime: req.body.useTime,
        gender: req.body.gender,
        age: req.body.age,
        final_Difficulty: req.body.final_Difficulty,
        time: req.body.time,
        groupID: req.body.groupID,
        textediting: req.body.textediting,
        spreadsheets: req.body.spreadsheets,
        presentation: req.body.presentation,
        pictureediting: req.body.pictureediting,
        coding: req.body.coding,
        gaming: req.body.gaming,
        email: req.body.email,
        internetsurfing: req.body.internetsurfing,
        informationgathering: req.body.informationgathering,
        onlineshopping: req.body.onlineshopping,
        onlinebanking: req.body.onlineshopping 
    }
    var sql = "INSERT INTO userData (firstUsed, useTime, gender, age, final_Difficulty, time, groupID, textediting, spreadsheets, presentation, pictureediting, coding, gaming, email, internetsurfing, informationgathering, onlineshopping, onlinebanking) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)"
    var params = [data.firstUsed, data.useTime, data.gender, data.age, data.final_Difficulty, data.time, data.groupID, data.textediting, data.spreadsheets, data.presentation, data.pictureediting, data.coding, data.gaming, data.email, data.internetsurfing, data.informationgathering, data.onlineshopping, data.onlinebanking]
    db.run(sql, params, (err, result) => {
        if(err) {
            res.status(400).json({"error": err.message})
            return;
        }
        res.json({
            "data": data
        })
    });
});

// PATCH groupTD
app.patch("/api/groupids/patch", (req, res, next) => {
    var data = {
        lastID: req.body.lastID
    }
    db.run(
        `UPDATE groupIDs set 
           lastID = COALESCE(?,lastID)`,
        [data.lastID],
        (err, result) => {
            if (err){
                res.status(400).json({"error": res.message})
                return;
            }
            res.json({
                message: "success",
                data: data,
                changes: this.changes
            })
    });
})

// PATCH items
app.patch("/api/items/patch/:itemID", (req, res, next) => {
    var data = {
            itemID: req.body.itemID,
            difficulty: req.body.difficulty,
            question: req.body.question,
            target: req.body.target,
            groupID: req.body.groupID,
            symbol: req.body.symbol 
    }
    db.run(
        `UPDATE items set
           itemID = COALESCE(?,itemID)
           difficulty = COALESCE(?,difficulty)
           question = COALESCE(?,question)
           target = COALESCE(?,target)
           groupID = COALESCE(?,groupID)
           symbol = COALESCE(?,symbol)
           WHERE itemID = ?`,
        [data.itemID, data.difficulty, data.question, data.target, data.groupID, data.symbol, req.params.id],
        (err, result) => {
            if (err){
                res.status(400).json({"error": res.message})
                return;
            }
            res.json({
                message: "success",
                data: data,
                changes: this.changes
            })
    });
})

// Default response for any other request
app.use(function(req, res) {
    res.status(404)
});
