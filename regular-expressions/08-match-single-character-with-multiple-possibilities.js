/**
 * Note: 
 * Character classes allow you to define a group of characters 
 * you wish to match by placing them inside square ([ and ]) brackets.
 * 
 * Example:
 * For example, you want to match bag, big, and bug but not bog. 
 * You can create the regex /b[aiu]g/ to do this. 
 * The [aiu] is the character class that will only match the characters a, i, or u.
 */


//  Use a character class with vowels (a, e, i, o, u) in your regex vowelRegex to find all the vowels in the string quoteSample.
// Note: Be sure to match both upper- and lowercase vowels.

let quoteSample = "Beware of bugs in the above code; I have only proved it correct, not tried it.";
let vowelRegex = /[aeiou]/gi;
let result = quoteSample.match(vowelRegex);

// Result
// [ 'e','a','e','o','u','i','e','a','o','e','o','e','I','a','e','o','o','e','i','o','e','o','i','e','i' ]

