class Promise2 {
    state = "pending"
    callBacks = []
    resolve(result) {
        if (this.state !== 'pending') return;
        this.state = 'fulfilled'
        setTimeout(() => {
            this.callBacks.forEach((handle) => {
                if (typeof handle[0] === 'function') {
                    const x = handle[0].call(undefined, result)
                    handle[2].resolveWith(x)
                }
            })
        }, 0)
    }
    reject(reason) {
        if (this.state !== 'pending') return;
        this.state = 'rejected'
        setTimeout(() => {
            this.callBacks.forEach((handle) => {
                if (typeof handle[1] === 'function') {
                    const x = handle[1].call(undefined, reason)
                    handle[2].resolveWith(x)
                }
            })
        }, 0)
    }
    constructor(fn) {
        if (typeof fn !== 'function') {
            throw new Error("只接受函数")
        }

        fn(this.resolve.bind(this), this.reject.bind(this))
    }
    then(succeed?, fail?) {
        const handle = []
        if (typeof succeed === 'function') {
            handle[0] = succeed
        }
        if (typeof fail === 'function') {
            handle[1] = fail
        }
        handle[2] = new Promise2(() => { })
        this.callBacks.push(handle)
        return handle[2]

    }
    //2.2.7.1 
    resolveWith(x) {
        //2.3.1 如果promise和x引用同一个对象，则用TypeError作为原因拒绝（reject）promise。
        if (this === x) {
            this.reject(new TypeError())
        } else if (x instanceof Promise2) {//2.3.2 如果x是一个promise,采用promise的状态3.4
            x.then((result) => {
                this.resolve(result)
            }, (reason) => {
                this.reject(reason)
            })
        }
        //2.3.3另外，如果x是个对象或者方法
        if (x instanceof Object) {
            let then
            try {
                then = x.then
            } catch (error) {
                this.reject(error)
            }
            if (then instanceof Function) {
                try {
                    x.then((y) => {
                        this.resolveWith(y)
                    }, (r) => {
                        this.reject(r)
                    })
                } catch (error) {
                    this.reject(error)
                }
            } else {
                this.resolve(x)
            }

        } else {
            this.resolve(x)
        }
    }
}
export default Promise2