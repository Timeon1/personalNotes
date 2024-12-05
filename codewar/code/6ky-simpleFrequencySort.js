// solve([2,3,5,3,7,9,5,3,7]) = [3,3,3,5,5,7,7,2,9]

const solve = (arr) => {
  const cache = {};
  arr.map((item) => {
    if (cache[item]) {
      cache[item] = cache[item] + 1;
    } else {
      cache[item] = 1;
    }
  });
  arr.sort((a, b) => {
    if (cache[a] - cache[b] > 0) {
      return -1;
    } else if (cache[a] - cache[b] < 0) {
      return 1;
    } else {
      if (a > b) {
        return 1;
      } else if (a < b) {
        return -1;
      } else {
        return 0;
      }
    }
  });
  return arr
};
solve([2, 3, 5, 3, 7, 9, 5, 3, 7]);
