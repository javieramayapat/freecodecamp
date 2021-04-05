/**
 * Excercise:
 * Create a single regex that matches a range of letters between h and s, 
 * and a range of numbers between 2 and 6. 
 * Remember to include the appropriate flags in the regex.
 * 
 * Note:
 * Using the hyphen (-) to match a range of characters is not limited to letters. It also works to match a range of numbers.
 */

let quoteSample = "Blueberry 3.141592653s are delicious.";
let myRegex = /[h-s2-6]/ig;
let result = quoteSample.match(myRegex);
console.log(result);
 //Result:
//[ 'l', 'r', 'r', '3', '4', '5', '2', '6', '5', '3', 's', 'r', 'l', 'i', 'i', 'o', 's' ]
