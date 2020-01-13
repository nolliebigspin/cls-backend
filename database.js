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
                db.run(itemInsert, [1.2, 2.474, "OK", "OK", "g1", false])
                db.run(itemInsert, [1.3, 1.45, "bestätigen", "Bestätigen", "g1", true])
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
                db.run(groudLinksInsert, ["g2", "Ein_Ausschalter", "Abspielen_Start", "Auswerfen_Eject", "Vorspulen", "Zurückspringen", "Ton_aus_Stumm", "Pause", "Stop"])
                db.run(groudLinksInsert, ["g3", "Umschalten_Großbuchstaben", "Enter_Eingabe", "Abbruch_Taste", "Tabulator", "Backspace_Löschen", "Entfernen", "F1", "Steuerung"])
                db.run(groudLinksInsert, ["g4", "USB", "FireWire", "Kensington-Lock", "Bluetooth", "Ethernet", "RFID", "DrahtlosesNetzwerk_Wireless", "News-Feed"])
                db.run(groudLinksInsert, ["g5", "Datei", "Cancel", "Tooltip", "Browser", "Hyperlink", "Icon"])
                db.run(groudLinksInsert, ["g6", "Scrollen", "Linke Maustaste Doppelklicken", "Linke Maustaste einmal klicken", "Server", "Ordner/Verzeichnis", "Drag & Drop"])
                db.run(groudLinksInsert, ["g7", "Slider", "Ordner", "Abbrechen", "Crop", "Favoriten", "Hyperlink", "NichtVerfügbar_Stop", "Distraktor_kopieren"])
                db.run(groudLinksInsert, ["g8", "Cursor_Mauszeiger_allgemein", "Masuszeiger_überHyperlink", "Hintergrundaktivität_bitteWarten", "Objekt_vergrößern", "Objekt_verschieben", "Nächste_Weiter", "Ok_Button", "Texteingabe"])
                db.run(groudLinksInsert, ["g9", "IP-Adresse", "Captcha", "CPU", "Shell", "Stream", "Http-Cookie"])
                db.run(groudLinksInsert, ["g10", "Alles_markieren", "Kopieren", "Datei_öffnen", "Drucken", "Speichern_Tastenkürzel", "Einfügen", "Ausschneiden", "Widerrufen_Rückgängig_machen"])
                db.run(groudLinksInsert, ["g11", "möglicherweise_Input", "Selbstauslöser", "DreieckMitKreis", "Input_Symbol", "Start_Symbol", "Toolbar", "Symbol_Drucken"])
                db.run(groudLinksInsert, ["g12", "Taskleiste", "Dialogfeld", "ASCII", "Widget", "Thumbnail", "Cache"])
                db.run(groudLinksInsert, ["g13", "Partitionierung", "Indexierung", "Extrahieren", "Formatierung", "Konfiguration", "Defragmentierung"])
                db.run(groudLinksInsert, ["g14", "Spam", "Cursor", "Menü", "URL", "Domain", "Desktop"])
                db.run(groudLinksInsert, ["g15", ".app", ".csv", ".iso", ".rar", ".sh", ".swf", ".tiff", ".ttf"])
                db.run(groudLinksInsert, ["g16", "Einstellung_zB", "RadioButton_OptionButton", "Check_Boxes_Check_Button", "Pop-Up-Menu", "Tabs_Reiter", "Rollbalken_Scrollbar", "SpinButton", "Drop-Down-Menu"])
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

