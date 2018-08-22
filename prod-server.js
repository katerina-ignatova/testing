const express = require('express');
const fallback = require('express-history-api-fallback');

const PORT = 3001;
const ROOT = `${__dirname}/dist`;

const app = express();
app.use(express.static(ROOT));
app.use(fallback('index.html', { root: ROOT }));

app.listen(PORT, ()=> {
  console.log(`Prod server listening on port ${PORT}. Serving from '${ROOT}'`);
});