
//     A friend of mine takes a sequence of numbers from 1 to n (where n > 0).
//     Within that sequence, he chooses two numbers, a and b.
//     He says that the product of a and b should be equal to the sum of all numbers in the sequence, excluding a and b.
//     Given a number n, could you tell me the numbers he excluded from the sequence?

// The function takes the parameter: n (n is always strictly greater than 0) and returns an array or a string (depending on the language) of the form:

// [(a, b), ...] or [[a, b], ...] or {{a, b}, ...} or or [{a, b}, ...]

// with all (a, b) which are the possible removed numbers in the sequence 1 to n.

// [(a, b), ...] or [[a, b], ...] or {{a, b}, ...} or ...will be sorted in increasing order of the "a".

// It happens that there are several possible (a, b). The function returns an empty array (or an empty string) if no possible numbers are found which will prove that my friend has not told the truth! (Go: in this case return nil).
//
// Example:
// removNb(26) should return [ {15, 21}, {21, 15} ]

function removeNB (number){
	var arr = [];
	var arrOfNumbers = [];
	var result = 0;
	for(var i = 1; i <= number; i++){
		arrOfNumbers.push(i);
		result += i;
	}
	for(var i = 0; i < arrOfNumbers.length; i++){
		for(var j = 0; j < number; j++){
			if(arrOfNumbers[i] * arrOfNumbers[j] === result - (arrOfNumbers[i] + arrOfNumbers[j])){
				arr.push(arrOfNumbers[i] , arrOfNumbers[j])
			}
		}
	}
	return arr;
}