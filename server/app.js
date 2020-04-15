const express = require('express');

const session = require('express-session');
const flash = require('connect-flash');
const SqlStore = require('connect-pg-simple')(session);

const app = express();
const http = require('http').createServer(app);
const io = require('socket.io')(http);
const cookie = require('cookie-parser');
const { join } = require('path');
const pgPool = require('./database/config/db_connection');
const router = require('./routes');
var bodyParser = require('body-parser')

var cors = require('cors')


app.use((req, res, next) => {
  req.io = io;
  next();
});
app.use(cors())
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(bodyParser.json({ type: 'application/*+json' }))
 
// parse some custom thing into a Buffer
app.use(bodyParser.raw({ type: 'application/vnd.custom-type' }))
 
// parse an HTML body into a string
app.use(cookie());
app.use(session({
  secret: 'trff',
  resave: false,
  saveUninitialized: false,
  store: new SqlStore({
    pool: pgPool,
    // tableName: 'product_sessions',
  }),
  cookie: { maxAge: 30 * 24 * 60 * 60 * 1000 },
}));

app.use(flash());
app.use((req, res, next) => {
  res.locals.session = req.session;
  next();
});
app.use('/api/v1', router);

app.use(express.static(join(__dirname, '..', 'client', 'build')));

app.get('*', (_req, res) => {
  res.sendFile(join(__dirname, '..', 'client', 'build', 'index.html'));
});

module.exports = http;
