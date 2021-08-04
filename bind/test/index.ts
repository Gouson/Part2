import bind from "../src/index"
(Function.prototype as any).bind2 = bind
console.assert((Function.prototype as any).bind2 !== undefined)


const fn1 = function (p1, p2) {
    return this
}
fn1.bind2('')