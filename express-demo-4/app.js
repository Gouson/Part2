const express = require('express')
const app = express()
const user = require('./router/users')
app.use('/users', user)
app.listen(3000, () => {
    console.log('3000')
})