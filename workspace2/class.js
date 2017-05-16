class MyClass{
  constructor(v1, v2){
    this.val1 = v1;
    this.val2 = v2;
  }
    
  myMethod(){
      console.log("in My method");
      console.log("Value 2 = "+ this.val2);
  }
}

var x = new MyClass("hai", 10);
console.log(x.val1);
x.myMethod();