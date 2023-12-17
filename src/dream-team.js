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
const createDreamTeam = members => {
  if (!Array.isArray(members) || members.length === 0) {
    return false;
  }

  const dreamTeamName = members
    .filter(name => typeof name === 'string')
    .map(name => name.trim())
    .map(name => name[0].toUpperCase())
    .sort((a, b) => a.localeCompare(b))
    .join('');

  return dreamTeamName;
};


module.exports = {
  createDreamTeam
};
