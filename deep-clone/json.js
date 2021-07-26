var a = {
    b: 1,
    c: [1, 2, 3],
    d: {
        d1: 'ddd1',
        d2: 'ddd2'
    }
}
var a2 = JSON.parse(JSON.stringify(a))