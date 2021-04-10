/**
 * 📑 Notes: 
 * 
 * 🤯 Now let's take a look at a slightly more complex object. 
 * Object properties can be nested to an arbitrary depth, 
 * and their values can be any type of data supported by JavaScript, 
 * including arrays and even other objects.
 * 
 * ✨ We use dot notation to move between leves of the object and reference the property.
 * 
 * 🧠 Challenge:
 * 
 * Here we've defined an object userActivity, which includes another object nested within it. 
 * Set the value of the online key to 45.
 * 
 */

let userActivity = {
    id: 23894201352,
    date: 'January 1, 2017',
    data: {
        totalUsers: 51,
        online: 42
    }
};

userActivity.data.online = 45;

console.log(userActivity);

// ✅ Output: 
/*
{ id: 23894201352,
  date: 'January 1, 2017',
  data: { totalUsers: 51, online: 45 } }
*/