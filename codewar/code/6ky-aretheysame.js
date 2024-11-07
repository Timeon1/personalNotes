function comp(array1, array2) {
  //your code here
  if(!Array.isArray(array1) || !Array.isArray(array2)) return false
  if(array1.filter(x=>x).length != array2.filter(x=>x).length) return false;
  if(new Set(array1).size != new Set(array2).size) return false
  
  const a = array1.reduce((prev, cur)=> prev+ (cur)*(cur), 0);
  const b = array2.reduce((prev , cur )=> prev+cur, 0)

  console.log('2121', a , b)
  return a == b
}

// const a = [3,4]
// const b = [0,25];

const a = [4,4]
const b = [1,31]

// const a = [121, 144, 19, 161, 19, 144, 19, 11];
// const b = [121, 14641, 20736, 361, 25921, 361, 20736, 361];

console.log('2', comp(a, b));
