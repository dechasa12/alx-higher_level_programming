#!/usr/bin/node
const oldArr = require('./100-data').list;
console.log(oldArr);
const newArr = oldArr.map((el, i) => el * i);
console.log(newArr);
