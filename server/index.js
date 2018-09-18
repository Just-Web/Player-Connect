const express = require('express');
const app = express();

app.get('/', function(req, res) {
  res.send('Welcome to Player-Connect!!');
});

app.get('/about', function(req, res) {
  res.send(
    'Player-Connect is a place for gamers to meet up and find people to play games with.'
  );
});

app.get('/home', function(req, res) {
  res.send('This is the Player-Connect homepage.');
});

app.get('/profile/:name', function(req, res) {
  res.send('you requested to see a profile with the name of ' + req.params.name);
});

const port = process.env.PORT || 3000
app.listen(port, function() {
  console.log(`listening on port ${port}...`);
});
