
function decide(array) {
	var counter = 0;
	var sign = false;
	var correctEnteries = [
         [1,2,3],
         [4,5,6],
         [7,8,9],
         [1,4,7],
         [2,5,8],
         [3,6,9],
         [1,5,9],
         [3,5,7]
		]
    correctEnteries.forEach(function(innerArray,i) {
    	counter = 0;
      array.forEach(function(number, j) {
         if (innerArray.indexOf(Number(number)) !==-1) {
             counter++;	
         }
      });
      if (counter === 3) {
      	sign = true;
      }
    });
    return (sign === true) ? true : false
}

var count = 0;
var result = [];
var result1 = [];
function change(ele) {
	    count++;
	    if (count % 2 === 0) {
	      //decide(ele.value);
	      result.push(ele.value);
	      ele.value = 'O';
	} else {
		  //decide(ele.value);
		  result1.push(ele.value);
		  ele.value = 'X';
	}
	if (count === 9) {
		if (decide(result1)) {
			alert('X have Won the Game');
		} else if (decide(result)) {
			alert('O have Won the Game');
		} else {
			alert("NO ONE WON, PLEASE REFRESH THE BROWSER TO PLAY AGAIN");
		}
	}
}// we cannot define function inside the document.ready cuz it does not have enough scope to be called from.
