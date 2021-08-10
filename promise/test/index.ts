import * as chai from 'chai'
import * as sinon from 'sinon'
import * as sinonChai from 'sinon-chai'
chai.use(sinonChai)
const assert = chai.assert
import Promise from "../src/promise"
describe('Promise', () => {
    it("Promise是一个类", () => {
        assert.isFunction(Promise)
        assert.isObject(Promise.prototype)
    })

    it("new Promise() 如果接受不是一个函数就报错", () => {
        assert.throw(() => {
            //@ts-ignore
            new Promise()
        })
        assert.throw(() => {
            //@ts-ignore
            new Promise(1)
        })
        assert.throw(() => {
            //@ts-ignore
            new Promise(false)
        })
    })
    it('new Promise(fn) 会生成一个对象，对象有then方法', () => {
        const promise = new Promise(() => { })
        assert.isFunction(promise.then)
    })
    it('new Promise(fn)中的fn立即执行', () => {
        let fn = sinon.fake()
        new Promise(fn)
        assert(fn.called)
    })
    it('new Promise(fn)中的fn执行的时候接受reject和resolve两个函数', (done) => {
        new Promise((resolve, reject) => {
            assert.isFunction(resolve)
            assert.isFunction(reject)
            done()
        })
    })
    it('promise.then(success)中的success会在resoleve被调用的时候执行', (done) => {
        const success = sinon.fake()
        const promise = new Promise((resolve, reject) => {
            //该函数没有执行
            assert.isFalse(success.called)
            resolve()
            //该函数执行了
            setTimeout(() => {
                assert.isTrue(success.called)
                done()
            });
        })
        //@ts-ignore
        promise.then(success)
    })
    it('promise.then(null,fail)中的fail会在reject被调用的时候执行', (done) => {
        const fail = sinon.fake()
        const promise = new Promise((resolve, reject) => {
            //该函数没有执行
            assert.isFalse(fail.called)
            reject()
            //该函数执行了
            setTimeout(() => {
                assert.isTrue(fail.called)
                done()
            });
        })
        //@ts-ignore
        promise.then(null, fail)
    })
    it('2.2.1onFulfilled和onRejected都是可选的参数', () => {
        const promise = new Promise((resolve) => {
            resolve()
        })
        promise.then(false, null)
        assert(1 === 1)
    });
    it('2.2.2如果onFulfilled是函数', (done) => {
        const succeed = sinon.fake()
        const promise = new Promise((resolve) => {
            assert.isFalse(succeed.called)
            resolve(233)
            resolve(2333)
            setTimeout(() => {
                assert(promise.state === 'fulfilled')
                assert.isTrue(succeed.calledOnce)
                assert(succeed.calledWith(233))
                done()
            }, 0);
        })
        promise.then(succeed)
    });
    it('2.2.3如果onRejected是函数', (done) => {
        const fail = sinon.fake()
        const promise = new Promise((resolve, reject) => {
            assert.isFalse(fail.called)
            reject(233)
            reject(2333)
            setTimeout(() => {
                assert(promise.state === 'rejected')
                assert.isTrue(fail.calledOnce)
                assert(fail.calledWith(233))
                done()
            }, 0);
        })
        promise.then(null, fail)
    });
    it('2.2.4在我的代码完成之前不得调用then后面的成功函数', (done) => {
        const succeed = sinon.fake()
        const promise = new Promise((resolve) => {
            resolve()
        })
        promise.then(succeed)
        assert.isFalse(succeed.called)
        setTimeout(() => {
            assert.isTrue(succeed.called)
            done()
        }, 0);
    });
    it('2.2.4在我的代码完成之前不得调用then后面的失败函数', (done) => {
        const fn = sinon.fake()
        const promise = new Promise((resolve, reject) => {
            reject()
        })
        promise.then(null, fn)
        assert.isFalse(fn.called)
        setTimeout(() => {
            assert.isTrue(fn.called)
            done()
        }, 0);
    });
    it("2.2.5", (done) => {
        const promise = new Promise(resolve => {
            resolve()
        })
        promise.then(function () {
            "use strict"
            assert(this === undefined)
            done()
        })
    })
    it("2.2.6 then成功可以在同一个promise里被多次调用", (done) => {
        const promise = new Promise((resolve) => {
            resolve()
        })
        const callBacks = [sinon.fake(), sinon.fake(), sinon.fake()]
        promise.then(callBacks[0])
        promise.then(callBacks[1])
        promise.then(callBacks[2])
        setTimeout(() => {
            assert(callBacks[0].called)
            assert(callBacks[1].calledAfter(callBacks[0]))
            assert(callBacks[2].calledAfter(callBacks[1]))
            done()
        }, 0);
    })
    it("2.2.6.2 then失败可以在同一个promise里被多次调用", (done) => {
        const promise = new Promise((resolve, reject) => {
            reject()
        })
        const callBacks = [sinon.fake(), sinon.fake(), sinon.fake()]
        promise.then(null, callBacks[0])
        promise.then(null, callBacks[1])
        promise.then(null, callBacks[2])
        setTimeout(() => {
            assert(callBacks[0].called)
            assert(callBacks[1].calledAfter(callBacks[0]))
            assert(callBacks[2].calledAfter(callBacks[1]))
            done()
        }, 0);
    })
    it("2.2.7 then必须返回一个promise", () => {
        const promise = new Promise((resolve) => {
            resolve()
        })
        const promise2 = promise.then(() => { }, () => { })
        assert(promise2 instanceof Promise)
    })

    it("2.2.7.1 如果then(sucess,fail)中的success返回一个值x,运行[[Resolve]](promise2, x)", (done) => {
        const promise1 = new Promise((resolve) => {
            resolve()
        })
        promise1.then(() => "成功", () => { }).then(result => {
            assert.equal(result, "成功")
            done()
        })
    })

    it("2.2.7.1.2 success的返回值是一个promise实例", (done) => {
        const promise1 = new Promise((resolve) => {
            resolve()
        })
        const fn = sinon.fake()
        const promise2 = promise1.then(() => new Promise(resolve => resolve()))
        promise2.then(fn)

        setTimeout(() => {
            assert(fn.called)
            done()
        }, 0);
    })
    it("2.2.7.1.2 success的返回值是一个promise实例,且失败了", (done) => {
        const promise1 = new Promise((resolve) => {
            resolve()
        })
        const fn = sinon.fake()
        const promise2 = promise1.then(() => new Promise((resolve, reject) => reject()))
        promise2.then(null, fn)

        setTimeout(() => {
            assert(fn.called)
            done()
        }, 0);
    })

    it("2.2.7.1.2 fail的返回值是一个promise实例", (done) => {
        const promise1 = new Promise((resolve, reject) => {
            reject()
        })
        const fn = sinon.fake()
        const promise2 = promise1.then(null, () => new Promise(resolve => resolve()))

        promise2.then(fn)

        setTimeout(() => {
            assert(fn.called)
            done()
        }, 0);
    })

    it("2.2.7.1.2 fail的返回值是一个promise实例且失败", (done) => {
        const promise1 = new Promise((resolve, reject) => {
            reject()
        })
        const fn = sinon.fake()
        const promise2 = promise1.then(null, () => new Promise((resolve, reject) => reject()))

        promise2.then(null, fn)

        setTimeout(() => {
            assert(fn.called)
            done()
        }, 0);
    })

    it("2.2.7.2 如果success抛出一个异常e,promise2 必须被拒绝（rejected）并把e当作原因",
        (done) => {
            const promise1 = new Promise((resolve, reject) => {
                resolve()
            })
            const fn = sinon.fake()
            const error = new Error()
            const promise2 = promise1.then(() => {
                throw error
            })
            promise2.then(null, fn)
            setTimeout(() => {
                assert(fn.called)
                assert(fn.calledWith(error))
                done()
            }, 0);
        }
    )
    it("2.2.7.2 如果fail抛出一个异常e,promise2 必须被拒绝（rejected）并把e当作原因",
    (done) => {
        const promise1 = new Promise((resolve, reject) => {
            reject()
        })
        const fn = sinon.fake()
        const error = new Error()
        const promise2 = promise1.then(null,() => {
            throw error
        })
        promise2.then(null, fn)
        setTimeout(() => {
            assert(fn.called)
            assert(fn.calledWith(error))
            done()
        }, 0);
    }
)
});
