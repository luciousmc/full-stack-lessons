const express =   require('express');
const path =      require('path');
const server =    express();
const staticDir = path.join(__dirname, 'public');
const exprsStat = express.static(staticDir);

server.use(exprsStat);

server.listen(3000, () => {
  console.log('Express is listening on port 3000');
});
