const express = require('express');

const PORT = 8080;

const app = express();
app.get('/', (req, res) => {
  res.send('Welcome to SCA Cloud School Application');
});

app.listen(PORT);
console.log(`Running on port ${PORT}`);