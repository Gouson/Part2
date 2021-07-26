function roller() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(Math.floor(Math.random() * 6) + 1)
        }, 3000);
    })
}
roller().then((data) => {
    console.log(data)
}, (err) => {
    console.log(err)
})