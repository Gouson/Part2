const express = require('express')
const app = express()
app.use((request, response, next) => {
    if (request.path === '/') {
        response.send('根目录')
    }
    next()
})
app.use('/aaa', (request, response, next) => {
    response.send('aaa')
    next()
})
app.get('xxx', (request, response, next) => {
    response.send('get xxx')
    next()
})
app.post('yyy', (request, response, next) => {
    response.send('post yyy')
    next()
})
app.route('/zzz')
    .all((request, response, next) => {
        response.send('all zzz')
        next()
    })
    .get((request, response, next) => {
        response.send('get zzz')
        next()
    })
    .post((request, response, next) => {
        response.send('post zzz')
        next()
    })
app.listen(3000, () => {})