var minChanges = function (s) {
  const arr = s.split('');
  let res = 0;
  for (let i = 0; i < arr.length; i++) {
    if (i % 2 == 0) {
      // even
      if (i < arr.length - 1 && arr[i] != arr[i + 1]) {
        arr[i] = arr[i + 1];
        res++;
      }
    } else {
      //odd
      if (i > 0 && arr[i] != arr[i - 1]) {
        arr[i] = arr[i - 1];
        res++;
      }
    }
  }
  console.log('arrr', arr, res);
  return res;
};

minChanges('11000111');
