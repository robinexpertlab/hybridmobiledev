var _ = require('underscore');

function double(k, v){
    return [v , k * 2]
}

var a = {1:12, 2:13, 3:10, 4: 5, 5:3, 6:15};
var par = _.map(a,double);
console.log(par);