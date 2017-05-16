var User = function(){
    this.one = 'hai';
    this.two = 'hello';
    this.three = 'ok';
    this.f1 = function(){
        console.log("inside user f1");
        return 12;
    }
};

User.prototype.four = "ten";

var u = new User();

console.log('five ='+u.five);
User.prototype = {};
User.prototype.five = "five";

var u1 = new User();
u1.four = "nine";


console.log('one ='+u.one);
console.log('u.five ='+u.five);

console.log('four ='+u1.four);
console.log('f1 ='+u1.f1());
console.log('u1.five ='+u1.five);