const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
//const expressValidator = require ('express-validator');
//const flash = require('connect-flash');
//const session = require('express-session');

mongoose.connect('mongodb://localhost/playerconnect');
let db = mongoose.connection;

//Check connection
db.once('open',function(){
  console.log('Connected to MongoDB');
});

db.on('error',function(err){
  console.log(err);
});

//Init App
const app = express();

//Bring in models
let User = require('./models/user');

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

//Route Files
let users = require('./routes/users');
app.use('/users',users);

const port = 9000
app.listen(port, function() {
  console.log(`listening on port ${port}...`);
});
