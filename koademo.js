
const Koa = require('koa');
const route = require('koa-route');
const app = new Koa();
const compose = require('koa-compose');
// const main = ctx => {
//     ctx.response.body = 'Hello World';
// };
const main = ctx => {
    if (ctx.request.accepts('xml')) {
        ctx.response.type = 'xml';
        ctx.response.body = '<data>Hello World</data>';
    } else if (ctx.request.accepts('json')) {
        ctx.response.type = 'json';
        ctx.response.body = { data: 'Hello World' };
    } else if (ctx.request.accepts('html')) {
        ctx.response.type = 'html';
        ctx.response.body = '<p>Hello World</p>';
    } else {
        ctx.response.type = 'text';
        ctx.response.body = 'Hello World';
    }
};

app.use(main);

// 路由

// const about = ctx => {
//     ctx.response.type = 'html';
//     ctx.response.body = '<a href="/">Index Page</a>';
// };
// const main = ctx => {
//     ctx.response.body = 'Hello World';
// };
// app.use(route.get('/', main));
// app.use(route.get('/about', about));

// 中间件栈

// const one = (ctx, next) => {
//     console.log('>> one');
//     next();
//     console.log('<< one');
// }
// const two = (ctx, next) => {
//     console.log('>> two');
//     next();
//     console.log('<< two');
// }
// const three = (ctx, next) => {
//     console.log('>> three');
//     next();
//     console.log('<< three');
// }
// app.use(one);
// app.use(two);
// app.use(three);
// const middlewares = compose([one, two,three]);
// app.use(middlewares);
app.listen(3000);
