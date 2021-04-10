/**
 * 📑 Notes:
 * 
 * Sometimes you may need to iterate through all the keys within an object. 
 * This requires a specific syntax in JavaScript called a for...in statement. 
 *
 * ✨ Curious fact:
 *  
 * 📍 For ..in strucucture
 * 
 * for(let user in users)
 * {
 * console.log(user);
 * }
 * 
 * 👀 Objects do not maintain an ordering to stored keys like arrays do; 
 * thus a key's position on an object, or the relative order in which it appears, is irrelevant when referencing or accessing that key.
 *
 * 🧠 Challenge:
 *
 * We've defined a function countOnline which accepts one argument (a users object).
 * Use a for...in statement within this function to loop through the users object passed into the function and return the number of users whose online property is set to true.
 * An example of a users object which could be passed to countOnline is shown below.
 * Each user will have an online property with either a true or false value.
 */

 let obj = {
    Alan: {
      online: false
    },
    Jeff: {
      online: true
    },
    Sarah: {
      online: false
    }
  };
  
  function countOnline(obj) {
    let count = 0;
  
    for (let user in obj) {
      if(obj[user]['online'] === true){
          count +=1;
      }
    }
    return count;
  }
  
  countOnline(obj);

// ✅ Output: 1
