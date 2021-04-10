/**
 * 📑 Notes: 
 * 
 * ✨Another huge advantage of the spread operator is the ability to combine arrays
 * or to insert all the elements of one array into another, at any index
 * 
 * 📍 With more traditional syntaxes, we can concatenate arrays, 
 * but this only allows us to combine arrays at the end of one, and at the start of another.
 * 
 *🧠 Challenge: 
 * We have defined a function spreadOut that returns the variable sentence. 
 * Modify the function using the spread operator so that it returns the array 
 * ['learning', 'to', 'code', 'is', 'fun'].
 * 
 */

function spreadOut() {
    let firstFragment = ['learning'];
    let lastFragment = ['is', 'fun'];
    let fragment = [...firstFragment, 'to', 'code', ...lastFragment];
    return fragment;
}

console.log(spreadOut());

// ✅ Output: [ 'learning', 'to', 'code', 'is', 'fun' ] 