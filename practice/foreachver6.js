var list=[1,2,3,4,5,6,7,8,9];

this.res = [];


list.forEach((v)=>
{
	if (v%2>0)
	{
		this.res.push(v);
	}
}
);
console.log(this.res);

