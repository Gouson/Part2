var slice = Array.prototype.slice

//ES6
function _bind(asThis, ...args) {
    //this 就是绑定bind前的那个函数
    var fn = this
    if (typeof fn !== 'function') {
        throw new Error('必须是函数')
    }
    return function (...args2) {
        return fn.call(asThis, ...args, ...args2)
    }
}

// 不用拓展运算符  ES3
function bind(asThis) {
    var args = slice.call(arguments, 1)
    //this 就是绑定bind前的那个函数
    var fn = this
    if (typeof fn !== 'function') {
        throw new Error('bind必须用在函数上')
    }
    return function () {
        var args2 = slice.call(arguments, 0)
        return fn.apply(asThis, args.concat(args2))
    }
}
module.exports = bind

if (!Function.prototype.bind) {
    Function.prototype.bind = bind
}