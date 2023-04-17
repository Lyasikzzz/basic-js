const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(names) {

  let result = [];

  if (names != null) {
    if (typeof names == 'object' && names.length > 0){
      names.forEach(nick => {
        if (typeof nick == 'string') {
          result.push(nick.trim().slice(0,1));
        }
      });
      return result.join('').toUpperCase().split('').sort().join('');
    } else {
      return false;
    }
  } else {
    return false;
  }
}

module.exports = {
  createDreamTeam
};

let a = [],
    b = ["dsds", "dsdsd"];

console.log(a.length);