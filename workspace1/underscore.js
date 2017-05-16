var _ = require('underscore');

function f1(e,i,ls){
    console.log(e+ ' '+i);
    console.log(ls);
}

var l = [7,4,9];
_.each(l,f1);