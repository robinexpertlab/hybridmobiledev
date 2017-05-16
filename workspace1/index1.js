
(function(){
    //var calc = require ('./calculate');
    //var result = calc.sum(20, 30);
    console.log('result -'+ result);
    var abc = {
        one:'heloo',
        two:'hai',
        myf: function(){
            console.log("inside myf");
            for(i =10; i <= 10000; i++){
                
            }
            return i;
        }
    };
    console.log('abc - one = '+ abc.one);
    console.log('abc - one = '+ abc.two);
    console.log('abc - myf = '+ abc.myf());
    
}())