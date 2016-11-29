// $(document).ready(function() {
// 	var count = 0;
//    $('.box').click(function(value) {
//        count++; 
//     console.log($('.box').val());
//    });
// });
var result = document.getElementsByClassName('box');

console.log(result.length);

result[1].addEventListener('click', function() {
	console.log(result.value);
}, false);

