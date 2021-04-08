/**
 * 📑 Notes:
 * 
 * ✨slice() copies or extracts a given number of elements to a new array, 
 * leaving the array it is called upon untouched.
 * 
 * 📍slice() takes only 2 parameters: 
 * 
 * 1️⃣ the first is the index at which to begin extraction.
 * 2️⃣ the second is the index at which to stop extraction
 * 
 * 👀(extraction will occur up to, but not including the element at this index).
 * 
 *🧠 Challenge:
 * We have defined a function, forecast, that takes an array as an argument. 
 * Modify the function using slice() to extract information from the argument array 
 * and return a new array that contains the string elements warm and sunny.
 */

function forecast(arr) {

  return arr.slice(2, 4);
}

console.log(forecast(['cold', 'rainy', 'warm', 'sunny', 'cool', 'thunderstorms']));

//✅ Output: [ 'warm', 'sunny' ] 