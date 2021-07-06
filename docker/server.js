const express = require('express');

const PORT = 8080;

const app = express();
app.get('/', (req, res) => {
  res.send('Welcome to SCA Cloud School Application , this is my first assessment');
});

app.listen(PORT);
console.log(`Running on port ${PORT}`);