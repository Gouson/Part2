var slice = Array.prototype.slice

//ES6
function _bind(asThis, ...args) {
    //this 就是绑定bind前的那个函数
    var fn = this

    function resultFn(...args2) {
        //new会做的事情
        //this //new 生成的
        //this.__proto__=resultFn.prototype
        //this.p1="x"
        //this.p2="y"
        //return this ;//这里 因为下面的return消失了，所以无法饭会这个this

        //this.constructor === resultFn  可能是继承的
        //this.__proto__ === resultFn.prototype    无法保证一定是new

        return fn.call(
            //resultFn.prototype.isPrototypeOf(this)  这个可以判断，es3就有
            this instanceof resultFn ? this : asThis,
            ...args,
            ...args2)
    }
    resultFn.prototype = fn.prototype
    return resultFn
}

// 不用拓展运算符  ES3
function bind(asThis) {
    var args = slice.call(arguments, 1)
    //this 就是绑定bind前的那个函数
    var fn = this
    if (typeof fn !== 'function') {
        throw new Error('必须是函数')
    }

    function resultFn() {
        var args2 = slice.call(arguments, 0)
        return fn.apply(
            resultFn.prototype.isPrototypeOf(this) ? this : asThis,
            rgs.concat(args2)
        )
    }
    resultFn.prototype = fn.prototype
    return resultFn
}

module.exports = _bind

if (!Function.prototype.bind) {
    Function.prototype.bind = _bind
}