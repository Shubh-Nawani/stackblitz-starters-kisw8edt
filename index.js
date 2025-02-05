const express = require('express');
const { resolve } = require('path');
const connectDB = require('./config/db')
require('dotenv').config()

const app = express();
const port = 3010;

app.use(express.static('static'));

app.get('/', (req, res) => {
  res.sendFile(resolve(__dirname, 'pages/index.html'));
});

app.listen(port, () => {
  try {
    connectDB()
    console.log(`Example app listening at http://localhost:${port}`);
  } catch (err) {
    console.error(err.message)
  }
  
});
