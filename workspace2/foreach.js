var list = [ 3, 5, 6, 4 , 2];
self = this;
this.result = [];

function isodd(v){
   if(v %2 > 0) 
   self.result.push(v);
}

list.forEach(isodd);
console.log(this.result);


