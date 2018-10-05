const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const index = require('./routes/index');
const api = require('./routes/api');
const app = express();

const webconfig = require('./webconfig');

// Setup View Engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs'); //specifies the engine we want to use
app.engine('html', require('ejs').renderFile); //renders files with html extension
// Set Static Folder
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/', index); //sets our home page route
app.use('/api', api); //sets our api call routes

app.listen(webconfig.PORT, function() {
    console.log(`Example app listening on port ${webconfig.PORT}!`);
});