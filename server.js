const express = require('express');
const path = require('path');

const app = express();

// Serve only the static files form the dist directory
app.use(express.static('./dist/performLine'));

app.get('/*', function (req, res, next) {

    res.sendFile(path.join(__dirname, '/dist/performLine/index.html'));
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);