import Koa from 'koa'
const app = new Koa()

app.use(async (ctx, next) => {
    await next();
    const time = ctx.response.get('X-Response-Time');//读取 response header
    console.log(`${ctx.url} - ${time}`);
});

app.use(async (ctx, next) => {
    const start = Date.now();//记录开始时间
    await next();
    const time = Date.now() - start;//记录结束时间 -start=总耗时
    ctx.set('X-Response-Time', `${time}ms`);//写到response header里
});

app.use(async ctx => {
    ctx.body = 'Hello World';
    // 最后一个中间件可以不写 await next()
});
app.listen(3000)