const express = require('express')
const responseTime = require('response-time')
const app = express()

// app.use((req, res, next) => {
//     const start = new Date()
//     res.locals.start = start
//     next()
// })
app.use(responseTime())
app.use((req, res, next) => {
    res.write('hello world')
    res.end()
    next()
})
app.use((req, res, next) => {
    console.log(res.get('x-response-time'))
    next()
})
app.listen(3000, () => {
    console.log('3000')
})