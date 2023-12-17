const { NotImplementedError } = require('../extensions/index.js');

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */

function renameFiles(names) {
  const fileCount = new Map();

  function getNewName(name, count) {
    if (count === 0) {
      return name;
    } else {
      return `${name}(${count})`;
    }
  }

  return names.map((name) => {
    let count = fileCount.get(name) || 0;

    while (fileCount.has(getNewName(name, count))) {
      count++;
    }

    fileCount.set(getNewName(name, count), 1);

    return getNewName(name, count);
  });
}


module.exports = {
  renameFiles
};
