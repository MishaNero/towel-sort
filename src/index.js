
// You should implement your task here.

module.exports = function towelSort (matrix) {
  let result = [];
  if (matrix) {
      matrix.forEach((array, i) => {
          i % 2 !== 0 ? array.sort((a, b) => b - a) : array.sort((a, b) => a - b);
          array.forEach(element => {
              result.push(element);
          });
      });
  }
  return result;
}
