// var tab = require('tab');
var colors = require('colors');
var tap = require('tap');

console.log('level-5'.rainbow);

function arraySum(i) {

    // i will be an array, containing integers, strings and/or arrays like itself.
    // Sum all the integers you find, anywhere in the nest of arrays.

    var result = 0;
    return (function() {
        result += function() {
            return i.forEach(function(e) {
                if (typeof e === 'number') return e;
                if (Array.isArray(e)) {
                    var r;
                    r += (function() {
                        e.forEach(function(e) {
                            return e;
                        })
                    })();
                    return r;
                }
            });
        }
        return result;
    })();

}
