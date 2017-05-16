var list = [ 3, 5, 6, 4 , 2];
this.result = [];


list.forEach((v) => {
   if(v %2 > 0) 
   this.result.push(v);
});
console.log(this.result);