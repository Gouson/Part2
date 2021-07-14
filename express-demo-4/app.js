const express = require('express')
const app = express()
app.set('views', 'gouson')
app.set('view engine', 'pug') //pug, ejs ...

app.get('/test', (req, res, next) => {
    // res.set('X-Gouson', 'yes')
    // res.append('X-Gouson', 'yes2')
    // res.status(401)
    // res.send('hi')
    // next()
    res.format({
        'text/plain': function () {
            res.send('hey')
        },

        'text/html': function () {
            res.send('<p>hey</p>')
        },

        'application/json': function () {
            res.send({
                message: 'hey'
            })
        },

        default: function () {
            // log the request and respond with 406
            res.status(406).send('Not Acceptable')
        }
    })
})
app.get('/gouson', (req, res, next) => {
    res.send('gouson')
})
app.listen(3000, () => {
    console.log('3000')
})