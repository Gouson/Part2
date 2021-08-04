const bind = require("../src/index")
Function.prototype.bind2 = bind
console.assert(Function.prototype.bind2 !== undefined)

//1 fn.bind(asThis)
const fn1 = function () {
    return this
}
const newFn1 = fn1.bind2({
    name: "gouson"
})
console.assert(newFn1().name === 'gouson')



//2 fn.bind(asThis,param1,param2)
const fn2 = function (p1, p2) {
    return [this, p1, p2]
}
const newFn2 = fn2.bind2({
    name: 'gouson'
}, 123, 456)
console.assert(newFn2()[0].name === 'gouson')
console.assert(newFn2()[1] === 123)
console.assert(newFn2()[2] === 456)

//3 fn.bind(asThis)()

const anotherFn2 = fn2.bind2({
    name: 'gouson'
})

console.assert(anotherFn2(223,224)[0].name === 'gouson')
console.assert(anotherFn2(223,224)[1] === 223)
console.assert(anotherFn2(223,224)[2] === 224)