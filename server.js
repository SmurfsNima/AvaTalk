const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(path.join(__dirname, '/dist')));

app.listen(process.env.PORT || 5000, () => {
  console.log('Server is running...');
});