
var koa = require('koa');
var cors = require('koa-cors');
var koabody = require('koa-body');
var app = new koa();
var routes = require('./router/index.js');

app.use(koabody());
app.use(cors({
    origin:'*',
    exposeHeaders: ['WWW-Authenticate', 'Server-Authorization', 'Date'],
    maxAge: 100,
    credentials: true,
    allowMethods: ['GET', 'POST', 'OPTIONS'],
    allowHeaders: ['Content-Type', 'Authorization', 'Accept', 'X-Custom-Header', 'anonymous'],
}));

routes(app);

app.listen(3000,function () {
    console.log('start.....')
});


