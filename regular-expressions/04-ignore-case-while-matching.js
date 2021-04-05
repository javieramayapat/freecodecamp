// Write a regex fccRegex to match freeCodeCamp, no matter its case. Your regex should not match any abbreviations or variations with spaces.

/**
 * Did you know that? 
 * The i flag in a RegEx ignores upper and lower case of a string increasing the possibility of match.
 */

 let myString = "freeCodeCamp";
 let fccRegex = /freecodecamp/i;
 let result = fccRegex.test(myString);