const express = require('express');
require('dotenv').config();

const app = express();

const port = process.env.PORT || 5000;

//getting log in page
app.get('/', (req, res) => {
    res.sendFile('login.html', { root: __dirname });
});
//getting css
app.use(express.static('public'))

app.listen(port, () => {
  console.log(`Server running on port ${port}`)
});
