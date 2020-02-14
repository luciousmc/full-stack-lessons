const express = require('express');
const app = express();

app.use(function(req, res) {
  console.log('The request method was: ', req.method);
  res.send('<strong>Howdy Partner! I got your request.</strong>');
});

app.listen(3000, function() {
  console.log('Express Server is listening on port 3000');
});
