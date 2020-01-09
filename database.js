var sqlite3 = require('sqlite3').verbose()
var md5 = require('md5')

const dbSource = "db.sqlite"

let db = new sqlite3.Database(dbSource, (err) => {
    if (err) {
      // Cannot open database
      console.error(err.message)
      throw err
    }else{
        console.log('Connected to the SQLite database.')
        db.run(`CREATE TABLE user (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name text, 
            email text UNIQUE, 
            password text, 
            CONSTRAINT email_unique UNIQUE (email)
            )`,
        (err) => {
            if (err) {
                // Table already created
            }else{
                // Table just created, creating some rows
                var insert = 'INSERT INTO user (name, email, password) VALUES (?,?,?)'
                db.run(insert, ["admin","admin@example.com",md5("admin123456")])
                db.run(insert, ["user","user@example.com",md5("user123456")])
            }
        }),

        db.run(`CREATE TABLE groupIDs (
            lastID INTEGER PRIMARY KEY
            )`,
        (err) => {
            if (err) {
                // table already created
            } else {
                var idInsert = 'INSERT INTO groupIDs (lastID) VALUES (?)'
                db.run(idInsert, 1)
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
                //test
            } else {
                var itemInsert = "INSERT INTO items (itemID, difficulty, question, target, groupID, symbol) VALUES (?,?,?,?,?,?)"
                db.run(itemInsert, [1.1, -2.474, "OK/bestätigen", "OK_Bestätigen", "g1", true])
            }
        })
    }
});

module.exports = db

