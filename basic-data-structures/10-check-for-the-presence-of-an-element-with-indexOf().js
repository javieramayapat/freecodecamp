/**
 * 📑 Notes:
 * 
 * 👀 Since arrays can be changed, or mutated, at any time, 
 * there's no guarantee about where a particular piece of data will be on a given array,
 * or if that element even still exists.
 * 
 * ✨ JavaScript provides us with another built-in method, indexOf(), 
 * that allows us to quickly and easily check for the presence of an element on an array.
 * 
 * 📍indexOf() takes an element as a parameter, and when called, 
 * it returns the position, or index, of that element, or -1 if the element does not exist on the array.
 * 
 * 🧠 Challenge:
 * 
 * We have defined a function, quickCheck, that takes an array and an element as arguments. 
 * Modify the function using indexOf() so that it returns true if the passed element exists on the array, 
 * and false if it does not.
 * 
 */

function quickCheck(arr, elem) {
    return arr.indexOf(elem) != -1 ? true : false;
}

console.log(quickCheck(['squash', 'onions', 'shallots'], 'squash'));

// Output: true