var route = require('koa-route');
var user = require('./user.js');

module.exports = function(app){
    app.use(route.post('/', async(ctx,next)=> {
        await user.insertData().then(function (data) {
            ctx.body = {
                errcode:0,
                message:'',
                data
            };
        })
    }));
}
