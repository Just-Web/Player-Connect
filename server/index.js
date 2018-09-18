const express = require('express');
const app = express();

app.get('/',(req,res)=>{
    res.send('Welcome to Player-Connect!!');
});

app.get('/about',(req,res)=>{
    res.send('Player-Connect is a place for gamers to meet up and find people to play games with.');
});

app.get('/home',(req,res)=>{
	res.send('This is the Player-Connect homepage.');
});

app.get('/accounts',(req,res)=>{
	res.send('Create Account.');
});
const port = process.env.PORT || 3000
app.listen(port, ()=>{
    console.log(`listening on port ${port}...`);
} );
