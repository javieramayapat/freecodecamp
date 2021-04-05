
// Complete the regex unRegex so that it matches the strings run, sun, fun, pun, nun, and bun. 
// Your regex should use the wildcard character.

/**
 * Note:
 * The wildcard character . will match any one character. 
 * The wildcard is also called dot and period. 
 * You can use the wildcard character just like any other character in the regex. 
 * For example, if you wanted to match hug, huh, hut, and hum, 
 * you can use the regex /hu./ to match all four words.
 */


let exampleStr = "Let's have fun with regular expressions!";
let unRegex = /.un/;
let result = unRegex.test(exampleStr);