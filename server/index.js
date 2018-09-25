const express = require('express');
var path = require('path');
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/nodekb');
let db = mongoose.connection;

//Init App
const app = express();

//Load View Engine
app.set('view engine','ejs');



app.get('/', function(req, res) {
  res.send('Welcome to Player-Connect!!');
});

app.get('/about', function(req, res) {
  res.sendFile(path.resolve('../client/app/views/about.html'));
});

app.get('/home', function(req, res) {
  res.sendFile(path.resolve('../client/app/views/homepage.html'));
});

//dynamic content, using ejs template
app.get('/profile/:id', function(req, res) {
  var data = {age:29, job:'chef', hobbies:['eating', 'playing', 'climbing']};
  res.render(path.resolve('../client/app/views/profile'), {id: req.params.id, data:data});
});

const port = 9000
app.listen(port, function() {
  console.log(`listening on port ${port}...`);
});
