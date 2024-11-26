function encrypt(text, n) {
  if (!text || !n) return text;
  let arr = text.split('');
  while (n > 0) {
    let even = [];
    let odd = [];
    arr.map((item, index) => {
      if (index % 2 == 0) {
        even.push(item);
      } else {
        odd.push(item);
      }
    });
    arr = [...odd, ...even];
    n--;
  }
  console.log('rrr', text, arr);
  return arr.join('');
}
function decrypt(text, n) {
  if (!text || n <= 0) return text;
  const middle = text.length / 2;

  const arr = [];

  const right = text.split('').slice(middle); // hsi  et
  const left = text.split('').slice(0, middle); // Ti sats!
  for (let i = 0; i < middle; i++) {
    if (i % 2 == i - 1) {
      arr.push(left[i]);
      arr.push(right[i]);
    } else {
      arr.push(right[i]);
      arr.push(left[i]);
    }
  }
  return decrypt(arr.join(''), n - 1);
}
// decrypt("hsi  etTi sats!", 1)
decrypt('s eT ashi tist!', 2);
// decrypt("hsi  etTi sats!", 1), "This is a test!"

// encrypt("012345", 1)  =>  "135024"
// encrypt("012345", 2)  =>  "135024"  ->  "304152"
// encrypt("012345", 3)  =>  "135024"  ->  "304152"  ->  "012345"

// encrypt("01234", 1)  =>  "13024"
// encrypt("01234", 2)  =>  "13024"  ->  "32104"
// encrypt("01234", 3)  =>  "13024"  ->  "32104"  ->  "20314"
