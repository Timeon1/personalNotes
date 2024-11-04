// const array = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9],
// ];
const array = [
  [1, 2, 3, 4, 5],
  [6, 7, 8, 9, 10],
  [11, 12, 13, 14, 15],
  [16, 17, 18, 19, 20],
  [21, 22, 23, 24, 25],
];
// snail(array) #=> [1,2,3,6,9,8,7,4,5]

function snail(arr) {
  //   const direction = {
  //     right: 1,
  //     left: -1,
  //     down: 1,
  //     up: -1,
  //   };

  const result = [];

  while (arr.length > 0) {
    // right
    result.push(...arr.shift());

    // down
    for (let i = 0; i < arr.length; i++) {
      result.push(arr[i].pop());
    }

    //left
    const last = arr.pop()
    if (Array.isArray(last) && last.length) {
      result.push(...last.reverse());
    }

    // up
    const lastLeft = []
    for (let i = 0; i < arr.length; i++) {
        lastLeft.push(arr[i].shift());
    }
    result.push(...lastLeft.reverse())
  }
//   console.log('resu;t', result);
  return result;
}
snail(array);
