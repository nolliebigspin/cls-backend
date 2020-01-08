// Create express app
var express = require("express")
var app = express()

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

// Other endpoints


// DEfault response for any other request
app.use(function(req, res) {
    res.status(404)
});
