const express = require('express');
const app = express();
var path = require('path');

app.get('/', function(req, res) {
  res.send('Welcome to Player-Connect!!');
});

app.get('/about', function(req, res) {
  res.sendFile(path.resolve('../client/app/views/about.html'));
});

app.get('/home', function(req, res) {
  res.sendFile(__dirname + '/homepage.html');
});

app.get('/profile/:name', function(req, res) {
  res.send('you requested to see a profile with the name of ' + req.params.name);
});

const port = process.env.PORT || 3000
app.listen(port, function() {
  console.log(`listening on port ${port}...`);
});
