const express = require('express')
const app = express()
// app.use((request, response, next) => {
//     if (request.path === '/') {
//         response.send('根目录')
//     }
//     next()
// })
// app.use((request, response, next) => {
//     if (request.path === '/') {
//         response.send('根目录')
//     }
//     next()
// })


// app.use('/aaa', (request, response, next) => {
//     response.send('aaa')
//     next()
// })
// app.get('xxx', (request, response, next) => {
//     response.send('get xxx')
//     next()
// })
// app.post('yyy', (request, response, next) => {
//     response.send('post yyy')
//     next()
// })
// app.route('/zzz')
//     .all((request, response, next) => {
//         response.send('all zzz')
//         next()
//     })
//     .get((request, response, next) => {
//         response.send('get zzz')
//         next()
//     })
//     .post((request, response, next) => {
//         response.send('post zzz')
//         next()
//     })

app.use((request, response, next) => {
    console.log(1)
    next()
})
app.use((request, response, next) => {
    console.log(2)
    if (true) {
        next('no login')
    } else {
        next()
    }
})
app.use((request, response, next) => {
    console.log(3)
    next()
})
app.use((error, request, response, next) => {
    console.log(error, )
    next(error)
})
let count = 0
app.use((error, request, response, next) => {
    count += 1
    console.log(`目前有${count}个错误`)
    next(error)
})
app.listen(3000, () => {})