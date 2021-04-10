/**
 * 📑 Notes: 
 * 
 * 📍One of the most powerful features when thinking of arrays as data structures, 
 * is that arrays can contain, or even be completely made up of other arrays
 * 
 * 🤯 In this way, an array can very quickly become very complex data structure, known as a multi-dimensional, or nested array. 
 * 
 * 💡 We can still very easily access the deepest levels of an array this complex with bracket notation:
 * console.log(nestedArray[2][1][0][0][0]);
 * 
 * 🧠 Excercise:
 * 
 * We have defined a variable, myNestedArray, set equal to an array. 
 * Modify myNestedArray, using any combination of strings,
 * numbers, and booleans for data elements, so that it has exactly five levels of depth 
 * (remember, the outer-most array is level 1). 
 * Somewhere on the third level, include the string deep, 
 * on the fourth level, include the string deeper, and on the fifth level, include the string deepest.
 * 
 */

//Example of multidimensional Array
let nestedArray = [
    ['deep'],
    [
        ['deeper'], ['deeper']
    ],
    [
        [
            ['deepest'], ['deepest']
        ],
        [
            [
                ['deepest-est?']
            ]
        ]
    ]
];

//Solution

let myNestedArray = [
    'Nivel 1',
    ['Nivel 2'],
    [
        ['Nivel 3', 'deep']
    ],
    [
        [
            ['Nivel 4', 'deeper']
        ]
    ],
    [
        [
            [
                ['Nivel 5', 'deepest']
            ]
        ]
    ]
];

// Access the deepest Level 🙋‍♂️
console.log(myNestedArray[4][0][0][0][1]);

// ✅ Output: deepest