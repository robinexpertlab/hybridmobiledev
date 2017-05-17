var list=[1,2,3,4,5,6,7,8,9];
self=this;
this.res = [];

function IsOdd(v)
{
	if(v % 2 > 0)
	{
		self.res.push(v);
	}
}

list.forEach(IsOdd);
console.log(this.res);

