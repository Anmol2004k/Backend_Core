import express from 'express'
const app = express()

app.get('/', (req, res) => {
  res.send('Hello World')
})

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