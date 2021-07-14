const {
    response
} = require('express')
const express = require('express')
const app = express()
app.set('case sensitive routing', true) //带小写敏感，set要放在前面
app.set('views', 'gouson')
app.set('view engine', 'pug') //pug, ejs ...
app.use(express.json()) //处理请求体json

app.use(express.static('yyy')) //静态路径

app.use(express.urlencoded()) //处理body x-www-form-urlencoded

app.get('/style.css', (req, res, next) => {
    res.send('style.css')
})
app.get('/STYLE.css', (req, res, next) => {
    res.send('STYLE.css')
})
app.get('/test', (req, res, next) => {
    res.render('test', {
        pageTitle: '网页标题' //渲染 传入变量
    })
})
app.post('/test', (req, res, next) => {
    res.send('post /test')
})
app.put('/test', (req, res, next) => {
    res.send('put /test')
})
app.delete('/test', (req, res, next) => {
    res.send('delete /test')
})
app.patch('/test', (req, res, next) => {
    res.send('patch /test')
})
app.use((req, res, next) => {
    console.log(req.body)
    res.send('hi')
    next()
})
app.listen(3000, () => {
    console.log('3000')
})