/**
 * 📑 Notes:
 * 
 * ✨ pop() removes an element from the end of an array
 * ✨ shift() removes an element from the beginning
 * 
 * 👀 The key difference between pop() and shift() and their cousins push() and unshift(), 
 * is that neither method takes parameters, 
 * and each only allows an array to be modified by a single element at a time.
 * 
 * 🤯 We can also return the value of the removed element with either method like this:
 * let deleteGreeting = greetings.pop();
 * 
 * 🧠 Challenge:
 * 
 * We have defined a function, popShift, which takes an array as an argument and returns a new array. 
 * Modify the function, using pop() and shift(), to remove the first and last elements of the argument array, 
 * and assign the removed elements to their corresponding variables, so that the returned array contains their values.
 */

function popShift(arr) {
  let popped = arr.pop();
  let shifted = arr.shift();
  return [shifted, popped];
}

console.log(popShift(['challenge', 'is', 'not', 'complete']));

// ✅ Output: [ 'challenge', 'complete' ]