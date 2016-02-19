var officerHandler = require('./handlers/officer_handler.js');
var eventHandler = require('./handlers/event_handler.js');

// configure express server
var express = require('express');
var app = express();

// configuring mongo database
var dbConfig = require('./db.js');
var mongoose = require('mongoose');
mongoose.connect(dbConfig.url);

// configure CORS
var cors = require('cors');
app.use(cors());

var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// routes
app.get('/events/date/:past?', function(req,res) {
	eventHandler.list(req.params.past, res);
})

app.post('/events', function(req, res) {
	eventHandler.post(req, res);
})

app.get('/officers/:name?', function(req, res) {
	officerHandler.get(req.params.name, res);
});

app.post('/officers', function(req, res) {
	officerHandler.post(req, res);
})



var server = app.listen(7588, '0.0.0.0', function() {
	var host = server.address().address;
	var port = server.address().port;

	console.log('Server listening at http://%s:%s',host, port);
});