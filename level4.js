var colors = require('colors');

console.log('level-4'.rainbow);

var arr = ['a', 'abc', 'b', '2222'];

function longestString(i) {

    // i will be an array.
    // return the longest string in the array

    return (function() {

        var longest = "";

        i.forEach(function(e, i) {

            // next = e;
            // if (next.length > longest.length) {
            //     longest = next;
            // } else if (next.length < longest.length) {
            //     return;
            // }

            // or simply
            // ...
            if (e.length > longest.length && typeof e === "string") longest = e;

        });
        return longest;
    })();
}

longestString(arr);
