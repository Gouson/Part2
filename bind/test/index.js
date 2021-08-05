const bind = require("../src/index")
Function.prototype.bind2 = bind
console.assert(Function.prototype.bind2 !== undefined)

test1('this绑定成功')
test2('this,p1,p2绑定成功')
test3('this,p1绑定成功，p2后传执成功')
test4('new 绑定p1,p2')
test5('new 绑定function sayHi')
test5('不用new  用类似一个对象')
//1 fn.bind(asThis)
function test1(message) {
    const fn = function () {
        return this
    }
    const newFn = fn.bind2({
        name: "gouson"
    })
    console.assert(newFn().name === 'gouson')
    console.log(message)
}




//2 fn.bind(asThis,param1,param2)
function test2(message) {
    const fn = function (p1, p2) {
        return [this, p1, p2]
    }
    const newFn = fn.bind2({
        name: 'gouson'
    }, 123, 456)
    console.assert(newFn()[0].name === 'gouson')
    console.assert(newFn()[1] === 123)
    console.assert(newFn()[2] === 456)
    console.log(message)
}

//3 fn.bind(asThis)()
function test3(message) {
    const fn = function (p1, p2) {
        return [this, p1, p2]
    }
    const anotherFn = fn.bind2({
        name: 'gouson'
    })

    console.assert(anotherFn(223, 224)[0].name === 'gouson')
    console.assert(anotherFn(223, 224)[1] === 223)
    console.assert(anotherFn(223, 224)[2] === 224)
    console.log(message)
}
//4 fn.bind(asThis)()
function test4(message) {
    const fn = function (p1, p2) {
        this.p1 = p1
        this.p2 = p2
    }
    const fn2 = fn.bind2(undefined, 'x', 'y')
    const object = new fn2()
    console.assert(object.p1 === 'x', 'x')
    console.assert(object.p2 === 'y', 'y')
    console.log(message)
}


function test5(message) {
    const fn = function (p1, p2) {
        this.p1 = p1
        this.p2 = p2
    }
    fn.prototype.sayHi = function () {}

    const fn2 = fn.bind2(undefined, 'x', 'y')
    const object = new fn2()

    console.assert(object.p1 === 'x', 'x')
    console.assert(object.p2 === 'y', 'y')
    console.assert(object.__proto__ === fn.prototype)
    console.assert(typeof object.sayHi === "function")
    console.log(message)
}

function test6(message) {
    const fn = function (p1, p2) {
        this.p1 = p1
        this.p2 = p2
    }
    fn.prototype.sayHi = function () {}
    const object1 = new fn('a', 'b')
    const fn2 = fn.bind2(object1, 'x', 'y')
    const object = fn2()

    console.assert(object === undefined, 'object为空')
    console.assert(object1.p1 === 'x', 'x')
    console.assert(object1.p2 === 'y', 'y')

    console.log(message)
}