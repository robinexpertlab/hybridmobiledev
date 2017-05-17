class MyClass
{
	constructor(v1,v2)
	{
		this.val1=v1;
		this.val2=v2;
		this.val3=30;
		this.val4=40;
	}
	MyMethod()
	{
		this.val3=99;
		this.val5=50;
		console.log("MyMethod : " + this.val1);
		console.log("val2 : " + this.val2);
	}
}

var x = new MyClass("Robin",34);
console.log("val1 : " + x.val1);
console.log("val2 : " + x.val2);
console.log("val3 : " + x.val3);
console.log("val4 : " + x.val4);
console.log("val5 : " + x.val5);
x.MyMethod();
console.log("val1 : " + x.val1);
console.log("val2 : " + x.val2);
console.log("val3 : " + x.val3);
console.log("val4 : " + x.val4);
console.log("val5 : " + x.val5);

