var route = require('koa-route');
var user = require('./user.js');
var blog = require('./blog.js');

module.exports = function(app){
    // 注册
    app.use(route.post('/register', async(ctx,next)=> {
        let requestData = ctx.request.body
        await user.insertData(requestData).then(function (data) {
            ctx.body = {
                code:0,
                message:'',
                data:'注册成功'
            };
        })
    }));
    // 登录
    app.use(route.post('/login', async(ctx,next)=> {
        let requestData = ctx.request.body;
        await user.login(requestData).then(function (data) {
            if (data.length > 0) {
                ctx.body = {
                    code:0,
                    message:'',
                    data
                };
            } else {
                ctx.body = {
                    code:1,
                    message:'未注册',
                    data:'未注册'
                };
            }
        })
    }));
    // app.use(route.post('/hotlist',async(ctx,next)=>{
    //     await blog.hotList().then(function (data) {
    //         ctx.body = {
    //             code:0,
    //             message:'',
    //             data
    //         };
    //     })
    // } ))
    app.use(route.post('/myArtical',async(ctx,next)=>{
        let token = ctx.request.authentication;
        let requestData = ctx.request.body;
        console.log()
        await blog.myArtical(requestData).then(function (data) {
            ctx.body = {
                code:0,
                message:'',
                data
            };
        })
    } ))
}
