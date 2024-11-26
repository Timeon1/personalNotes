function inAscOrder(arr) {
    return arr.join('-') == arr.sort((a,b)=>a-b).join('-')
  }