var sqlite = require("sqlite3").verbose()
var md5 = require("md5")

const dbSource = "db.sqlite"

let db = new sqlite.Database(dbSource, (err) => {
    if(err) {
        // Cannot open database
        console.log(err.message)
        throw err
    } else {
        console.log("Connected to the SQLite database!")
        db.run(`CREATE TABLE user (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name text, 
            email text UNIQUE, 
            password text, 
            CONSTRAINT email_unique UNIQUE (email)
                )`,
        (err) => {
            if(err) {
                // Table already created
            } else {
                // Table just created, creating some rows
                var insert = "ISERT INTO user (name, email, password) VALUES (?,?,?)"
                db.run(insert, ["admin", "admin@example.com", md5("admin123456")])
                db.run(insert, ["user", "user@example.com", md5("user123456")])
            }
        });
    }
});

module.exports = db