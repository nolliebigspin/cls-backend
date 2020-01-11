var sqlite3 = require('sqlite3').verbose()
var md5 = require('md5')

const dbSource = "db.sqlite"

// Creates a new SQLite database
let db = new sqlite3.Database(dbSource, (err) => {
    if (err) {
      // Cannot open database
      console.error(err.message)
      throw err
    }else{
        console.log('Connected to the SQLite database.')
        db.run(`CREATE TABLE groupIDs (
            lastID INTEGER PRIMARY KEY,
            id INTEGER
            )`,
        (err) => {
            if (err) {
                // Table already created
            } else {
                var idInsert = 'INSERT INTO groupIDs (lastID, id) VALUES (?,?)'
                db.run(idInsert, 1, 0)
            }
        }),

        db.run(`CREATE TABLE items (
            itemID REAL PRIMARY KEY,
            difficulty REAL,
            question TEXT,
            target TEXT,
            groupID TEXT,
            symbol NUMERIC
            )`,
        (err) => {
            if (err) {
                // Table already created
            } else {
                var itemInsert = "INSERT INTO items (itemID, difficulty, question, target, groupID, symbol) VALUES (?,?,?,?,?,?)"
                db.run(itemInsert, [1.1, -2.474, "OK/bestätigen", "OK_Bestätigen", "g1", true])
            }
        }),

        db.run(`CREATE TABLE groupLinks (
            groupID TEXT PRIMARY KEY,
            target0 TEXT,
            target1 TEXT,
            target2 TEXT,
            target3 TEXT,
            target4 TEXT,
            target5 TEXT,
            target6 TEXT,
            target7 TEXT
            )`,
        (err) => {
            if (err) {
                // Table already created
            } else {
                var groudLinksInsert = "INSERT INTO groupLinks (groupID, target0, target1, target2, target3, target4, target5, target6, target7) VALUES (?,?,?,?,?,?,?,?,?)"
                db.run(groudLinksInsert, ["g1", "OK_Bestätigen", "Rückgängig", "Hilfe", "Abbruch_Symbol", "Anhang", "Speichern_Symbol", "Löschen", "Datei"])
            }
        }),

        db.run(`CREATE TABLE userTemplate (            
            firstUsed INTEGER,
            useTime INTEGER,
            gender TEXT,
            age INTEGER,
            final_Difficulty REAL,
            time REAL,
            groupID INTEGER PRIMARY KEY,
            textediting INTEGER,
            spreadsheets INTEGER,
            presentation INTEGER,
            pictureediting INTEGER,
            coding INTEGER,
            gaming INTEGER,
            email INTEGER,
            internetsurfing INTEGER,
            informationgathering INTEGER,
            onlineshopping INTEGER,
            onlinebanking INTEGER    
            )`,
        (err) => {
            if (err) {
                // Table already created
            } else {
                var userTemplateInsert = "INSERT INTO userTemplate (groupID) VALUES (?)"
                db.run(userTemplateInsert, [0])
            }
        }),

        db.run(`CREATE TABLE userData (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            firstUsed INTEGER,
            useTime INTEGER,
            gender TEXT,
            age INTEGER,
            final_Difficulty REAL,
            time REAL,
            groupID INTEGER,
            textediting INTEGER,
            spreadsheets INTEGER,
            presentation INTEGER,
            pictureediting INTEGER,
            coding INTEGER,
            gaming INTEGER,
            email INTEGER,
            internetsurfing INTEGER,
            informationgathering INTEGER,
            onlineshopping INTEGER,
            onlinebanking INTEGER
            )`,
        (err) => {
            if (err) {
                // Table already created
            } else {
                var userDataInsert = "INSERT INTO userData (firstUsed, useTime, gender, age, final_Difficulty, time, groupID, textediting, spreadsheets, presentation, pictureediting, coding, gaming, email, internetsurfing, informationgathering, onlineshopping, onlinebanking) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)"
                db.run(userDataInsert, [4, 70, "male", 20, 2.4, 10.5, 0, 2, 3, 4, 0, 1, 2, 3, 4, 0, 1, 2])
            }
        })        
    }
});

module.exports = db

