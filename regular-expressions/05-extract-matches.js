// Apply the .match() method to extract the string coding.

/**
 * Note that the .match syntax is the "opposite" of the .test method you have been using thus far:
 * Example:
 * 'string'.match(/regex/);
 * /regex/.test('string');
 */

 let extractStr = "Extract the word 'coding' from this string.";
 let codingRegex = /coding/i; 
 let result = extractStr.match(codingRegex);