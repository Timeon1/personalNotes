// check string no repeat letter

function isIsogram(str) {
  const arr = str.toLowerCase().split('');
  return new Set(arr).size == arr.length;
}

const res = isIsogram('aba');
console.log('res', res);
