// var tab = require('tab');
var colors = require('colors');
var test = require('tap').test;

console.log('level-5'.red);

test("test sum of arrays", function(t){
    t.equal(arraySum([[1,2,3],4,5]), 15, "array sum should be total 15".red);
    // Testing "arraySum([[1,2,false],'4','5'])"
    t.equal(arraySum([[1,2,false],'4','5']), 15, "array sum should be total 3".blue);
    t.end();
});

function arraySum(i) { 

    // i will be an array, containing integers, strings and/or arrays like itself.
    // Sum all the integers you find, anywhere in the nest of arrays.
    
    var ints = [];
    var flat = [];

     // sumAll
    var intSum=0, flatSum=0, result=0;

    // check for arrays and ints
    i.forEach(function(e){
        if(typeof e == 'number') ints.push(e);
        if(Array.isArray(e)) flat.push(e);

    })
    console.log("ints : " + ints)
    console.log("flat : " + flat)
    
    var sumArray = function(arr){
        return arr.reduce(function(a,b){
            return a + b;
        })
    }

    var flatArray = function(arr){
        return arr.reduce(function(a,b){
            return Array.prototype.concat(a,b);
        })
    }
    
    intSum  = sumArray(ints);

    flatSum = (function(){
        
        var sum= 0;
        
        if(ints.length == i.length){
            sum = 0;
        }else{
            sum = sumArray(flatArray(flat))
            console.log(sum)
        }
        return sum;
    })();

    return intSum + flatSum;


}
