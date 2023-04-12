const bodyParser = require('body-parser');
const express = require('express');
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.post('/sendValues/:id', function (req, res) {
  const val = req.params
  console.log(val);
  res.send("hello")
})

app.listen(process.env.PORT || 3002)