var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var http = require('http');
var fs = require('fs');
var app = express();

const server = http.createServer(function(request, response) {
    if (request.url === '/') {
        const html = fs.readFileSync('2cache.html', 'utf8');
        response.writeHead(200, {
            'Content-Type': 'text/html'
        });
        response.end(html);
    }
    if (request.url === '/public/images/dianzan.png') {
        const img1 = fs.readFileSync('public/images/dianzan.png');
        response.writeHead(200, {
            'Content-Type': 'image/png',
            'Cache-Control': 'max-age=10'
        });
        response.end(img1);
    }
    if (request.url === '/public/images/pwd.png') {
        const img2 = fs.readFileSync('public/images/dianzan.png');
        response.writeHead(200, {
            'Content-Type': 'image/png',
            'Cache-Control': 'no-store'
        });
        response.end(img2);
    }
    if (request.url === 'public/images/search.png') {
        const img3 = fs.readFileSync('public/images/search.png');
        response.writeHead(200, {
            'Content-Type': 'image/png',
            'Cache-Control':'no-cache',
        });
        response.end(img3);
    }
});
server.listen(5000);
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
