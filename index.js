var express = require('express');
var cookieParser = require('cookie-parser');
var compression = require('compression');

const app = express();

app.use(compression());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/', require('./routes/routes'));

app.listen(6060, () => {
  console.log('API started on port 6060');
});