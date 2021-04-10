/**
 * 📑 Notes:
 * 
 * Well, you can use the third parameter of splice(), comprised of one or more element(s), to add to the array. 
 * This can be incredibly useful for quickly switching out an element, or a set of elements, for another.
 * 
 * 🧠 Challenge:
 * We have defined a function, htmlColorNames, which takes an array of HTML colors as an argument. 
 * Modify the function using splice() to remove the first two elements of the array and add 'DarkSalmon' and 'BlanchedAlmond' in their respective places.
 */

function htmlColorNames(arr) {
  arr.splice(0, 2, 'DarkSalmon', 'BlanchedAlmond');
  return arr;
}

console.log(htmlColorNames(['DarkGoldenRod', 'WhiteSmoke', 'LavenderBlush', 'PaleTurquoise', 'FireBrick']));

// ✅ Output: [ 'DarkSalmon', 'BlanchedAlmond', 'LavenderBlush', 'PaleTurquoise', 'FireBrick' ]