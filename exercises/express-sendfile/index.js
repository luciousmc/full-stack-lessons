const express = require('express');
const app = express();

app.use((req, res, next)=> {
  let url = req.originalUrl;
  if (url === '/main.js' || url === '/index.html' || url === '/styles.css') {
    res.sendFile(url, { root: __dirname }, (err)=> {
      if (err) {
        next(err);
      } else {
        console.log('Sent ', url);
      }
    });
  } else {
    res.status(404).send('Error: File not Found');
  }
});

app.listen(3000, ()=> {
  console.log('Express is listening on port 3000');
});
