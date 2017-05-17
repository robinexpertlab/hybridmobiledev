var arr = Array(2,3,4,5,6,7);
var res = arr.slice(2);
var out = Array.prototype.slice.call(res,2);
console.log(arr);
console.log(res);
console.log(out);
