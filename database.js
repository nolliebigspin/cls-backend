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
            lastID INTEGER PRIMARY KEY
            )`,
        (err) => {
            if (err) {
                // Table already created
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
                // Table already created
            } else {
                var itemInsert = "INSERT INTO items (itemID, difficulty, question, target, groupID, symbol) VALUES (?,?,?,?,?,?)"
                db.run(itemInsert, [1.1, -2.474, "OK/bestätigen", "OK_Bestätigen", "g1", true])
                db.run(itemInsert, [1.2, -1.974, "Rückgängig", "Rückgängig", "g1", true])
                db.run(itemInsert, [1.5, -1.383, "Anhang", "Anhang", "g1", true])
                db.run(itemInsert, [1.6, -2.103, "Speichern", "Speicher_Symbol", "g1", true])
                db.run(itemInsert, [1.7, -2.744, "Löschen", "Löschen", "g1", true])
                db.run(itemInsert, [2.1, -3.499, "Ein-/Ausschalter", "Ein_Ausschalter", "g2", true])
                db.run(itemInsert, [2.2, -2.955, "Abspielen/Start", "Abspielen_Start", "g2", true])
                db.run(itemInsert, [2.3, -1.29, "Auswerfen/Eject", "Auswerfen_Eject", "g2", true])
                db.run(itemInsert, [2.4, -3.073, "Vorspulen", "Vorspulen", "g2", true])
                db.run(itemInsert, [2.5, -2.649, "Zurückspringen", "Zurückspringen", "g2", true])
                db.run(itemInsert, [2.7, -1.913, "Pause", "Pause", "g2", true])
                db.run(itemInsert, [2.8, -1.479, "Stop", "Stop", "g2", true])
                db.run(itemInsert, [3.1, 0.161, "Umschalten/Großuchstaben", "Umschalten_Großbuchstaben", "g3", true])
                db.run(itemInsert, [3.2, -2.038, "Enter/Eingabe", "Enter_Eingabe", "g3", true])
                db.run(itemInsert, [3.3, -1.245, "Abbruch", "Abbruch_Symbol", "g3", true])
                db.run(itemInsert, [3.4, -0.384, "Tabulator", "Tabulator", "g3", true])
                db.run(itemInsert, [3.5, -0.789, "Backspace/Löschen", "Backspace_Löschen", "g3", true])
                db.run(itemInsert, [3.8, 0.929, "Steuerung", "Steuerung", "g3", true])       
                db.run(itemInsert, [4.3, -1.913, "Kensington-Lock", "Kensington-Lock", "g4", true])
                db.run(itemInsert, [4.4, -1.796, "Bluetooth", "Bluetooth", "g4", true])
                db.run(itemInsert, [4.5, 1.547, "Ethernet", "Ethernet", "g4", true])
                db.run(itemInsert, [5.1, 1-74, "Daten, die als eigenständiges Dokument unter einem gemeinsamen Namen abgelegt werden", "Datei", "g5", false])
                db.run(itemInsert, [5.3, -0.867, "Kurzer Text, der eingeblendet werden kann, wenn der Mauszeiger längere Zeit auf einem Icon verweilt", "Tooltip", "g5", false])
                db.run(itemInsert, [5.4, -1.383, "Anwendung zum Betrachten von Inhalten im WWW (World Wide Web)", "Browser", "g5", false])
                db.run(itemInsert, [5.5, -1.336, "Querweise in Hypertext-Dokumenten die zu andren Stellen/Seiten verzweigen", "Hyperlink", "g5", false])
                db.run(itemInsert, [6.1, -0.314, "Verschiebt den Festerinhalt oder die Bildschirmseite nach oben/unten bzw. links/rechts", "Scrollen", "g6", false])
                db.run(itemInsert, [6.2, -1.245, "Öffnet eine Datei oder startet ein Programm", "Linke Maustaste doppelklicken", "g6", false])
                db.run(itemInsert, [6.3,-0.244, "Markiert ein Objekt oder aktiviert ein Befehl", "Linke Maustaste einmal klicken", "g6", false])
                db.run(itemInsert, [6.5, -0.828, "Gruppe von Dokumenten, die unter einem gemeinsamen Namen abgelegt sind", "Ordner/Verzeichnis", "g6", false])
                db.run(itemInsert, [6.6, 0.36, "Verschiebt Objekte auf dem Bildschirm", "Drag & Drop", "g6", false])
                db.run(itemInsert, [7.1, 0.895, "Slider", "Slider", "g7", true])
                db.run(itemInsert, [7.2, -1.913, "Ordner", "Ordner", "g7", true])
                db.run(itemInsert, [7.3, -0.6, "Abbrechen", "Abbrechen", "g7", true])
                db.run(itemInsert, [7.5, -0.073, "Favoriten", "Favoriten", "g7", true])
                db.run(itemInsert, [7.6, 0.128, "Hyperlink", "Hyperlink", "g7", true])
                db.run(itemInsert, [7.7, -0.674, "Nicht verfügbar/Stop", "NichtVerfügbar_Stop", "g7", true])
                db.run(itemInsert, [8.1, -1.029, "Cursor/mauszeiger allgemein", "Cursor_Mauszeiger_allgemein", "g8", true])
                db.run(itemInsert, [8.2, -0.527, "Mauszeiger über Hyperlink", "Masuszeiger_überHyperlink", "g8", true])
                db.run(itemInsert, [8.3, -1.685, "Hintergundaktivität/bitte warten", "Hintergrundaktivität_bitteWarten", "g8", true])
                db.run(itemInsert, [8.4, -0.674, "Objekte vergrößern", "Objekt_vergrößern", "g8", true])
                db.run(itemInsert, [8.8, -0.712, "Texteingabe", "Texteingabe", "g8", true])
                db.run(itemInsert, [9.1, -0.637, "Nummer zur Identifizierung eines Computerse oder Gerätes in einem Netzwerk", "IP-Adresse", "g9", false])
                db.run(itemInsert, [9.2, 1.283, "Automatischer Test um Menschen von Computern zu unterscheiden", "Captcha", "g9", false])
                db.run(itemInsert, [9.4, 2.097, "Kommandozeileninterpreter", "Shell", "g9", false])
                db.run(itemInsert, [10.3, 0.658, "Öffnen", "Datei_öffnen", "g10", true])
                db.run(itemInsert, [10.4, 0.525, "Drucken", "Drucken", "g10", true])
                db.run(itemInsert, [10.7, 1.586, "Ausschneiden", "Ausschneiden", "g10", true])
                db.run(itemInsert, [10.8, 1.033, "Widerrufen/rückgängig", "Widerrufen_Rückgängig_machen", "g10", true])
                db.run(itemInsert, [11.2, 0.998, "Selbstauslöser", "Selbstauslöser", "g11", true])
                db.run(itemInsert, [11.3, 2.786, "Stop/Abbrechen", "DreieckMitKreis", "g11", true])
                db.run(itemInsert, [11.4, 0.426, "Input", "Input_Symbol", "g11", true])     
                db.run(itemInsert, [11.5, 2.608, "Start", "Start_Symbol", "g11", true])
                db.run(itemInsert, [11.6, 1.747, "Toolbar", "Toolbar", "g11", true])
                db.run(itemInsert, [11.7, 0.459, "Fortschrittsbalken", "Fortschrittsbalken", "g11", true])
                db.run(itemInsert, [12.1, 1.32, "Teil einer grafischen Oberfläche, der z.B. ein zentrales Programmauswahlmenü bereitstellt, derzeit laufene Programme und aktuelles Datum und Uhrzeit anzeigt", "Taskleiste", "g12", false])
                db.run(itemInsert, [12.2, 0.326, "Fenster, das auf dem Bildschirm angezeigt wird und eine Meldung enthält und/oder eine Eingabe verlangt", "Dialogfeld", "g12", false])
                db.run(itemInsert, [12.4, 2.051, "Interaktionselement in grafischen Benutzeroberflächen oder ein kleines Desktop-Programm", "Widget", "g12", false])
                db.run(itemInsert, [12.5, 0.895, "Eine verkleinerte Grafik zur Vorschau von Bildern", "Thumbnail", "g12", false])
                db.run(itemInsert, [12.6, 0.492, "Schneller Speicher mit geringer Kapazität, der als Puffer eingesetzt wird", "Cache", "g12", false])  
                db.run(itemInsert, [13.1, 2.413, "Aufteilung einer Festplatte in mehrere logische Bereiche", "Partitionierung", "g13", false])
                db.run(itemInsert, [13.2, 1.706, "Verfahren der Kennzeichnung, bei dem einem Dokument bestimmte vorher festgelegte beschriebene Elemente zugeordnet werden", "Indexierung", "g13", false])
                db.run(itemInsert, [13.5, 1.789, "Eine bestimmte Einstellung von Programmen oder Hardwarebestandteilen", "Konfiguration", "g13", false])
                db.run(itemInsert, [13.6, 1.033, "Beschreibt den Vorgang und das Ergebnis einer Neuordnung von Datenblöcken auf einem Speichermedium durch ein spezielles Programm", "Defragmentierung", "g13", false])      
                db.run(itemInsert, [14.2, 0.161, "Bildschirmmarkierung, die eine Positionsanzeige auf dem Bildschirm gestattet", "Cursor", "g14", false])
                db.run(itemInsert, [14.4, 1.068, "Identifiziert und lokalisiert eine Ressource über das verwendete Netzwerkprotokoll und den Ort der Ressource im Computernetzwerk", "URL", "g14", false])
                db.run(itemInsert, [14.6, 0.326, "Arbeitsoberfläche und unterste Fensterebene eines grafischen Betriebssystems", "Desktop", "g14", false])            
                db.run(itemInsert, [15.1, 2.497, "Ausführbare Datei", ".app", "g15", false])
                db.run(itemInsert, [15.3, 1.706, "CD-Image", ".iso", "g15", false])
                db.run(itemInsert, [15.4, 0.998, "Komprimiertes Dateiarchiv", ".rar", "g15", false])
                db.run(itemInsert, [15.5, 1.626, "Shell-Skript", ".sh", "g15", false])
                db.run(itemInsert, [15.8, 3.119, "Vektorgrafisches Format für Schiftschnitte", ".ttf", "g15", false])
                db.run(itemInsert, [16.2, 2.849, "Radio Button/Option Button", "RadioButton_OptionButton", "g16", true])
                db.run(itemInsert, [16.4, 2.143, "Pop-Up-Menü", "Pop-Up-Menu", "g16", true])
                db.run(itemInsert, [16.5, 0.692, "Tabs/Reiter", "Tabs_Reiter", "g16", true])
                db.run(itemInsert, [16.6, 0.725, "Rollbalken/Scrollbar", "Rollbalken_Scrollbar", "g16", true])
                db.run(itemInsert, [16.8, 2.289, "Drop-Down Menü", "Drop-Down-Menu", "g16", true])                
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
                var userTemplateInsert = "INSERT INTO userTemplate (firstUsed, useTime, gender, age, final_Difficulty, time,  groupID, textediting, spreadsheets, presentation, pictureediting, coding, gaming, email, internetsurfing, informationgathering, onlineshopping, onlinebanking) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)"
                db.run(userTemplateInsert, [0, 0, "tmp", 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0])
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

