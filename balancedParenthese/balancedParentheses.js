/*
Balanced Parenthesis
Given a string, return true if it contains balanced parentheses ().

isBalanced("(x + y) - (4)")	// true
isBalanced("(((10 ) ()) ((?)(:)))")	// true
isBalanced("(50)(")	// false
isBalanced("") //	true
*/

var isBalanced = function(str) {
	var openingPar= str.split("").filter(item=>item==="(").length
	var closingPar= str.split("").filter(item=>item===")").length
	return openingPar ===closingPar
};
