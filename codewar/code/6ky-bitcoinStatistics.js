// discard = 2
// array 0 = 800,1200,2100,4100,1300,700 // discard 800,1200 at start and 1300,700 at end
// array 1 = 1000,1500,4500,5000,5800,2000,1500 // discard 1000,1500 at start and 2000,1500 at en

// array 0 = 2100,3100,4100 // min, avg, max for input array 0 (without discarded values)
// array 1 = 4500,5100,5800 // min, avg, max for input array 1 (without discarded values)
// array 2 = 2100,4300,5800 // total min, avg, max (without discarded values)

const data = [
  [800, 1200, 2100, 4100, 1300, 700],
  [1000, 1500, 4500, 5000, 5800, 2000, 1500],
];
const expected = [
  [2100, 3100, 4100],
  [4500, 5100, 5800],
  [2100, 4300, 5800],
];

function avage(arr){
  const avaNum = arr.reduce((prev, cur)=> prev+cur, 0) / arr.length
  return avaNum
}

function slim(arr , num){
  let data = [...arr]
  for(let i = 0; i < num ; i++){
    data.shift()
    data.pop()
  }
  console.log('data', data)
  const max = Math.max(...data)
  const min = Math.min(...data)
  return [[min, avage(data) , max ] , data]
}

function getMinAvgMax(toDiscard, data) {

  const resultArr = []
  let all = []
  for(let i = 0 ; i< data.length; i++){
    const [data1, origin] = slim([...data[i]] , toDiscard)
    resultArr.push(data1)
    all = [...all , ...origin]
  }

  // const [data1, origin1] = slim([...data[0]] , toDiscard)
  // const [data2, origin2] = slim([...data[1]] , toDiscard)

  const [data3,] = slim(all, 0)
  


  console.log('1', all , )
  console.log('2', [...resultArr, data3]  )

  return [...resultArr, data3];
}

getMinAvgMax(2, data);
