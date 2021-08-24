let a: any = 1
a = 'hi'

type B = { name: string }
let b: unknown = JSON.parse('{"name":"frank"}')
console.log((b as B).name)  //断言

let print: () => void = function () {
    console.log(1)
}

type Dir = 1 | 2 | 3 | 4 | undefined
let dir: Dir = 1
switch (dir) {
    case 1:
        break;
    case 2:
        break;
    case 3:
        break;
    case 4:
        break;
    case undefined:
        break;
    default:
        console.log(dir)  //dir: never
        break;
}

//tuple 元组
let p: [number, number] = [100.200]
let p2: [number, string, boolean] = [100, 'x', true]

enum Dir1 { 东, 南, 西, 北 }
let d2: Dir2 = Dir1.东  //0
let d3: Dir3 = Dir1.西 //2
console.log(d2, d3) //0 2