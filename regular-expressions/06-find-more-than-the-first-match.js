// Using the regex starRegex, find and extract both Twinkle words from the string twinkleStar.

/**
 * Note:
 * To search or extract a pattern more than once, you can use the g flag.
 */

let twinkleStar = "Twinkle, twinkle, little star";
let startRegex = /Twinkle/ig;
let result = twinkleStar.match(startRegex);