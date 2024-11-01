function parseInt(string) {
  // TODO: it's your task now
  const num = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
  const double = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

  const strArr = string.split(' ');

  const resArr = [];

  console.log('strArr', strArr);
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
      console.log('curArr', curArr);
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
    }
  });
  const res = resArr.reduce((x, c) => x + c, 0);
  console.log('resArr', resArr, res);
  return res;
}

//   const res = parseInt('one')

parseInt('forty-six');
parseInt('two hundred forty-six');
