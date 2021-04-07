/**
 * Note:
 * splice() allows us to do just that: remove any number of consecutive elements from anywhere in an array.
 * 
 * splice() can take up to 3 parameters, but for now, we'll focus on just the first 2.
 * 
 * The first two parameters of splice() are integers which represent indexes, or positions, of the array that splice()
 * 
 * splice()'s first parameter represents the index on the array from which to begin removing elements,
 * while the second parameter indicates the number of elements to delete.
 * 
 * splice() not only modifies the array it's being called on, 
 * but it also returns a new array containing the value of the removed elements.
 * 
 */

 const arr = [2, 4, 5, 1, 7, 5, 2, 1];
 arr.splice(1,4);
 console.log(arr);

// Output: [ 2, 5, 2, 1 ]