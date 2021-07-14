const express = require('express')
var router = express.Router()
router.get('/', (req, res, next) => {
    res.send('/users')
})
router.get('/:id', (req, res, next) => {
    res.send('/users/:id')
})
router.get('/:id/edit', (req, res, next) => {
    res.send('/users/:id/edit')
})
module.exports = router