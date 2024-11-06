// 1-1    // 0
// 1 -1   // 0
// 1- 1   // 0
// 1 - 1  // 0
// 1- -1  // 2
// 1 - -1 // 2
// 1--1   // 2

// 6 + -(4)   // 2
// 6 + -( -4) // 10

// (2 / (2 + 3.33) * 4) - -6


// * / first  then + -

const isfirst = ( front, back )=>{
  const first = '*/'
  const then = '+-'
  if(front.includes(first) && back.includes(first)){
    return true
  }

  if(front.includes(first) && back.includes(then)){
    return true
  }

  if(front.includes(then) && back.includes(then) ){
    return true
  }

  if(front.includes(then) && back.includes(first)){
    return false
  }

}

const calcHandle = ()=>{
  
}



const calc = function (expression) {
  // evaluate `expression` and return result

  const arr = expression.split(' ')

  const stack = []
  const charArr = []

  for(let i = 0 ; i < arr.length ; i++){
    if( typeof arr[i] == 'number' ){
      stack.push(arr[i])
    }else {
      // char +- , */
      if(charArr.length){

        // * / first  then + -
        if(isfirst(arr[i], charArr[stack.length-1])){
          charArr.pop(arr[i])

        }
      }else {
        charArr.push(arr[i])
      }




    }


  }



};

const res = calc('1- 1')