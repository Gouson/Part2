import express from 'express'
const app = express()
const port = 3000

app.get('/', (req, res) => {
    console.log(req)
    express.send('你好!')
})

app.post('/xxx', (request, response, next) => {

})
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})