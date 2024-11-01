function parseInt(string) {
  // TODO: it's your task now
  const num = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
  const double = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

  const strArr = string.split(' ');

  let resArr = [];

  strArr.map((item) => {
    if (num.includes(item)) {
      const nIndex = num.findIndex((_item) => _item == item);
      resArr.push(nIndex);
    } else if (double.includes(item)) {
      const dIndex = double.findIndex((_item) => _item == item);
      resArr.push((dIndex + 2) * 10);
    } else if (item.includes('-')) {
      const curArr = item.split('-');
      const curRes = [];
      curArr.map((cItem) => {
        if (num.includes(cItem)) {
          const nIndex = num.findIndex((_item) => _item == cItem);
          curRes.push(nIndex);
        } else if (double.includes(cItem)) {
          const dIndex = double.findIndex((_item) => _item == cItem);
          curRes.push((dIndex + 2) * 10);
        }
      });
      resArr.push(curRes.reduce((x, c) => x + c, 0));
    } else if (item == 'hundred') {
      resArr[resArr.length - 1] = resArr[resArr.length - 1] * 100;

    }else if(item == 'thousand'){

      const sum = resArr.reduce((x, c) => x + c, 0)
      resArr =  [sum * 1000];
    }else if(item == 'million'){

      const sum = resArr.reduce((x, c) => x + c, 0)
      resArr =  [sum * 1000000];
    }
  });
  
  //sum
  const res = resArr.reduce((x, c) => x + c, 0);
  return res;
}


// parseInt('forty-six');
parseInt('six hundred sixty-six thousand six hundred sixty-six')
// parseInt('two thousand forty-six');
