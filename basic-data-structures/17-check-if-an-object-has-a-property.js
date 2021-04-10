/**
 * ✨Now we can add, modify, and remove keys from objects. 
 * 😲But what if we just wanted to know if an object has a specific property?
 * 
 * JavaScript provides us with two different ways to do this.
 * 
 * 📍 One uses the hasOwnProperty() method
 * 📍 Lhe other uses the in keyword.
 * 
 * 👇 Example:
 * 
 * users.hasOwnProperty('Alan');
 * 'Alan' in users;
 * 
 * 🧠 Challenge:
 * 
 * We've created an object, users, with some users in it and a function isEveryoneHere, 
 * which we pass the users object to as an argument. 
 * Finish writing this function so that it returns true only if the users object contains
 * all four names, Alan, Jeff, Sarah, and Ryan, as keys, and false otherwise.
 */

let users = {
    Alan: {
        age: 27,
        online: true
    },
    Jeff: {
        age: 32,
        online: true
    },
    Sarah: {
        age: 48,
        online: true
    },
    Ryan: {
        age: 19,
        online: true
    }
};

users.hasOwnProperty('sarah');

function isEveryoneHere(users) {
    let response = false;
    if ('Alan' in users && 'Jeff' in users && 'Sarah' in users && 'Ryan' in users) {
        response = true;
    }
    return response;
}

console.log(isEveryoneHere(users));

// ✅ Output: True
