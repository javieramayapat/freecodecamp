/**
 * 📑 Notes:
 * 
 * At their most basic, objects are just collections of key-value pairs. In other words, 
 * they are pieces of data (values) mapped to unique identifiers called properties (keys)
 * 
 * ✨ Diferent ways to add an additional property to an Object:
 * 
 * 📍 This uses dot notation:
 * person.edad = 15;
 * 
 * ✨ This use Bracket Notation:
 * 
 * 📍 Bracket notation:
 * required if your property has a space in it or if you want to use a variable to name the property. 
 * In the above case, the property is enclosed in quotes to denote it as a string and will be added exactly as shown. 
 * Without quotes, it will be evaluated as a variable and the name of the property will be whatever value the variable is. 
 * Here's an example with a variable:
 * 
 * person['second name'] = 'Amaya';
 * 
 * const eyes = 'eye color';
 * tekkenCharacter[eyes] = 'brown';
 * 
 * 🧠 Challenge:
 * 
 * A foods object has been created with three entries. 
 * Using the syntax of your choice, add three more entries to it: 
 * bananas with a value of 13, grapes with a value of 35, and strawberries with a value of 27.
 * 
 */

let foods = {
    apples: 25,
    oranges: 32,
    plums: 28
};

foods.bananas = 13;
foods['grapes'] = 35;
foods.strawberries = 27;

console.log(foods);


// ✅ Output: 

/*
{ apples: 25,
    oranges: 32,
    plums: 28,
    bananas: 13,
    grapes: 35,
    strawberries: 27
}
*/