const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
  let seasons = ['winter', 'winter', 'spring', 'spring', 'spring', 'summer', 'summer', 'summer', 'autumn', 'autumn', 'autumn', 'winter'],
      num = date;
/*   try {
    getFullYear(num);
    num = date;
    getMonth(num);
    num = date;
    getDate(num);
  } catch(error) {
    return 'Invalid date!'; 
  } */

  if (date == undefined) {
    return 'Unable to determine the time of year!';
  } else if (isNaN(date)) {
    return 'Invalid date!'; 
  } else {
    return seasons[Math.floor(date.getMonth())];
  }
}

let d = new Date(2019, 11, 22, 23, 45, 11, 500);
console.log(getSeason(d));


module.exports = {
  getSeason
};

