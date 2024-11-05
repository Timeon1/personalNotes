function moveZeros(arr) {

  const filterZeroArr = arr.filter(item=> item !== 0)
  return [...filterZeroArr, ...Array(arr.length-filterZeroArr.length).fill(0)]

}

const test = moveZeros([false, 1, 0, 1, 2, 0, 1, 3, 'a']); // returns[false,1,1,2,1,3,"a",0,0]
console.log(test)
