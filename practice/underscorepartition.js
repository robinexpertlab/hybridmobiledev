var _ = require('underscore');

function isodd(v)
{
	if (v%2>0)
		return true;
	else
		return false;
}

var arr=Array(1,2,3,4,5,6,7,8,9);
var par=_.partition(arr,isodd);
console.log(par);

