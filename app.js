//manual aproach (creat package,json in the root, create properties etc)
//npm init (step by press enter to skip)
// npm init -y (everythin default)

const _ = require('lodash')

const items = [1,[2,[3,[4]]]]
const newItems = _.flattenDeep(items)
console.log(newItems);