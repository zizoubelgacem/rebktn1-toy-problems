/*
Largest Product of Three
Write a function that accepts an array of integers and returns the largest product possible from three of those numbers.

largestProductOfThree([ 2, 1, 3, 7 ]) // 42
largestProductOfThree([ 0, 2, 3 ]) //	0
largestProductOfThree([1, 4, -5, -2]) // 40
*/

function largestProductOfThree(array) {

	var largest = 1;
	for (var i = 0; i < array.length; i++) {
		array[i] = Math.abs(array[i]);
	}

	array.sort();
	
	if(array.length < 3){
		return 'array have less than 3 elements';
	}
    else if(array.length === 3)
    	var i = 0;
    else{
    	var i = 1
    }

	for ( i ; i < array.length; i++) {
		
		largest*=array[i] ;
	}
	return largest;
}
largestProductOfThree([1, 4, -5, -2])