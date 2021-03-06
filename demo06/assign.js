//Object.assign() 方法用于将所有可枚举的属性的值从一个或多个源对象复制到目标对象。它将返回目标对象。

//Object.assign(target, ...sources)

//合并object
var o1 = { a: 1 };
var o2 = { b: 2, a: 11 };
var o3 = { c: 3, b: 22 };

var obj = Object.assign(o1, o2, o3);
console.log(obj); // { a: 1, b: 2, c: 3 }
console.log(o1);  // { a: 1, b: 2, c: 3 }, 注意目标对象自身也会改变。

var obj2 = Object.assign([], o2, o3);
console.log(obj2);
// console.log(typeof obj2);
// console.log(Array.isArray(obj2));
// console.log(obj2.length);



