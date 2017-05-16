var _ = require('underscore');

function isodd(e){
    if(e % 2 > 0) 
        return true;
    else
        return false;
}

var a = Array(12, 13, 10, 5, 3, 15);
var par = _.partition(a,isodd);
console.log(par);