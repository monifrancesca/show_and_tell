var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var routes = require('./routes/index');
var users = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');


/*
var knex = require('knex')({
  client: 'mysql',
  connection: {
    host     : '127.0.0.1',
    user     : 'postgres',
    password : 'your_database_password',
    database : 'showtell'
  }
});

var pg = require('knex')({
  client: 'pg',
  connection: process.env.PG_CONNECTION_STRING,
  searchPath: 'knex,public'
});
*/
/*
// testing knex
var knex = require('knex')({
  client: 'pg',
  connection: HEROKU_POSTGRESQL_COLOR_URL,
  ssl: true
}
});


// testing bookshelf connection to heroku
var Bookshelf = require( 'bookshelf' );

Bookshelf.PG = Bookshelf.initialize({
  client: 'pg',
  debug: true,
  connection: {
    host     : process.env.PG_HOST || 'localhost',
    user     : process.env.PG_USER || 'postgres',
    password : process.env.PG_PASSWORD || 'postgres',
    database : process.env.PG_DB || 'db',
    charset  : 'utf8'
  }
});

var User = Bookshelf.PG.Model.extend({
  tableName: 'users',
  idAttribute: 'id'
});

var u = User.forge({email: 'test@fake.com', password: 'test'});
u.save();

process.exit();
*/


// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);
app.use('/users', users);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;
