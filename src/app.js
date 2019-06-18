//创建koa2工程
const Koa = require('koa');
//创建一个Koa对象表示web app本身
const app = new Koa();
//对于任何请求，app将调用该异步函数处理请求
app.use(async(ctx,next)=>{
    await next();
    ctx.response.type = 'text/html';
    ctx.response.body = '<h1>Hello,Koa2</h1>';
});
//在端口3000监听
app.listen(3000);
console.log('app started at porp 3000...');