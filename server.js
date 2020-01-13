// Create express app
var express = require("express")
var cors = require('cors')
var app = express()
var db = require("./database.js")
var bodyParser = require("body-parser");

app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/products/:id', function (req, res, next) {
    res.json({msg: 'enables CORS for GET'})
})

app.post('/products/:id', function (req, res, next) {
    res.json({msg: 'enables CORS for POST'})
})

app.patch('/products/:id', function (req, res, next) {
    res.json({msg: 'enables CORS for PATCH'})
})
  
app.listen(8000, function () {
    console.log('CORS-enabled web server listening on port 8000')
})

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
            "value":rows[0]
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
            "data":rows[0]
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
            "groups":rows
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
            "user":rows[0]
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
            "users":rows
        })
    });
});

// GET the userData final difficulty
app.get("/api/userData/final_Difficulty", (req, res, next) => {
    var sql = "select final_Difficulty from userData"        
    var params = []
    db.all(sql, params, (err, rows) => {
        if (err) {
            res.status(400).json({"error":err.message});
            return;
        }
        res.json({
            "users":rows
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

// PATCH groupID
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

// POST item
app.post("/api/items", (req, res, next) => {
    var data = {
        itemID: req.body.itemID,
        difficulty: req.body.difficulty,
        question: req.body.question,
        target: req.body.target,
        groupID: req.body.groupID,
        symbol: req.body.symbol 
    }
    var sql = "INSERT INTO items (itemID, difficulty, question, target, groupID, symbol) VALUES (?,?,?,?,?,?)"    
    var params = [data.itemID, data.difficulty, data.question, data.target, data.groupID, data.symbol]
    db.run(sql, params, (err, result) => {
        if(err) {
            res.status(400).json({"error": err.message})
            return;
        }
        res.json({
            "data": data
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
           itemID = COALESCE(?,itemID),
           difficulty = COALESCE(?,difficulty),
           question = COALESCE(?,question),
           target = COALESCE(?,target),
           groupID = COALESCE(?,groupID),
           symbol = COALESCE(?,symbol)
           WHERE itemID = ?`,
        [data.itemID, data.difficulty, data.question, data.target, data.groupID, data.symbol, req.params.itemID],
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
