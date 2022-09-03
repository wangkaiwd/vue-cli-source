const Module = require('module')
const path = require('path')
// const a = 1
// const b = 2
//
// const c = a + b
// console.log('c', c)

const createRequire = Module.createRequire

// specify require execute filename
// this will affect node module parse algorithm
const r = createRequire(path.resolve(__dirname, './packages/@vue/cli'))
const x = r('pkg-dir')
console.log('x', x)
