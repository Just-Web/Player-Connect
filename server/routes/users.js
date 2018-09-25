const express = require('express');
const router = express.Router();
const path = require('path');

//Bring in User model
let User = require('../models/user');

//Register form
router.get('/register', function(req, res){
  res.sendFile(path.resolve('../client/app/views/register.html'));
});

module.exports = router;
