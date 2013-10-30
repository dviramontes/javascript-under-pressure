// var tab = require('tab');
var colors = require('colors');
var tap = require('tap');

console.log('level-4'.rainbow);

var arr = ['a', 'abc', 'b'];


function longestString(i){

	return (function(){
		
		var longest;
		var cache = 0;

		i.forEach(function(e,i){
			cache = e;
			longest = cache.length > e.length ? cache : longest ;
			longest = cache.length < e.length ? cache : longest ;
		});

		console.log(longest);
		return longest;
	})();
}

longestString(arr);