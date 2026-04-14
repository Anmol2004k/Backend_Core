import express from 'express'
const app = express()

app.get('/', (req, res) => {
  res.send('Hello World')
});
 
app.use(function(req, res, next) {
   console.log("Hello from middleware");
   next();
});

app.use(function(req, res, next) {
   console.log("Hello from middleware 2");
   next();
});

app.get('/proof', (req, res) => {
  res.send('Hello Everyone ksee hai aap log');
});

app.get('/profile/Harsh', (req, res) => {
  res.send('Hello Everyone ksee hai aap log i am HERSHHHH');
});

app.get('/profile/:username', (req, res) => {
   res.send(`Hello ${req.params.username}, ksee hai aap log`);
});


app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000')
  })

  // var data = require('./2script.js');       old version of js
// console.log(data);

// import data from './2script.js';            // new version of js
// console.log(data); 

// using npm package

// var oneLinerJoke = require('one-liner-joke');
// console.log( oneLinerJoke.getRandomJoke());