import EventHub from '../src/index';

type TestCase = (message: string) => void
const test1: TestCase = (message) => {
    const eventHub = new EventHub()
    console.assert(eventHub instanceof Object === true, "eventHub 是个对象")
    console.log(message)
}

const test2: TestCase = (message) => {
    const eventHub = new EventHub()
    let called = false
    eventHub.on("xxx", (data) => {
        called = true
        console.log("男篮", data)
    })
    eventHub.emit("xxx", "迈特凯")
    setTimeout(() => {
        console.assert(called)
        console.log(message)
    }, 1000)
}

const test3: TestCase = (message) => {
    const eventHub = new EventHub()
    let called = false
    const fn = () => {
        called = true
        console.log("yyy")
    }
    eventHub.on("yyy", fn)
    eventHub.off("yyy", fn)
    eventHub.emit("yyy")
    setTimeout(() => {
        console.assert(called)
        console.log(message)
    }, 1000)
}

test1('EventHub可以创建对象')
test2('on 之后 emit会触发on的回调函数')
test3('off卸载监听')
