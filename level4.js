// var tab = require('tab');
var colors = require('colors');
var tap = require('tap');

console.log('level-4'.rainbow);

var arr = ['a', 'abc', 'b', '2222'];


function longestString(i) {

    return (function() {

        var longest = "";
        var next;

        i.forEach(function(e, i) {
            next = e;
            if (next.length > longest.length) {
                longest = next;
            } else if (next.length < longest.length) {
                return;
            }
        });



        console.log(longest);
        return longest;
    })();
}

longestString(arr);