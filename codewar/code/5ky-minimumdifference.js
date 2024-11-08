// "aa" => new Object[]{1, 'a'}

// "aabbca" => new Object[]{1, 'a'}

// "abka" => new Object[]{3, 'a'}

// "abcded" => new Object[]{2, 'd'}

// "abbbbbc" => new Object[]{1, 'b'}

// "abc" => null

function minRepeatingCharacterDifference(text) {
  const arr = text.split('');
  if (new Set(arr).size == arr.length) return null;

  let start = 0;
  let end = start + 1 ;
  const resObj = {};
  const resArr = []

  while (start < arr.length -1) {
    let result = 0;

    while (result == 0) {
      if (end <= arr.length - 1) {
        if (arr[start] == arr[end]) {
          
          result = end - start;
          let key = arr[start];
          // console.log('ss', arr[start], arr[end] , start , end);
          if( resArr.length && result < resArr[0][0] ){
            resArr.unshift([result , key])
          }else {
            resArr.push([result , key])
          }

          if(resObj.hasOwnProperty(key)){
            resObj[key] = result < resObj[key] ? result : resObj[key]
          }else {
            resObj[key] = result
          }
          start++;
          end = start + 1;
          break;
        } else {
          end++;
        }
      } else {
        start++;
        end = start + 1;
        console.log('eeeee', start, end)
        break
      }
    }
    
  }
  // console.log('result', resObj , resArr);
  return resArr.length ? resArr[0] : [];
}
// minRepeatingCharacterDifference('abcded')
// minRepeatingCharacterDifference('abbbbbc')
// minRepeatingCharacterDifference('aa')
// [ 1, 'y' ]
// minRepeatingCharacterDifference('usofwhzynvnzkylhayyebevachdcthk');
minRepeatingCharacterDifference('gnnzgsrcgkh');
// minRepeatingCharacterDifference('oipmtpwlrrlgxqjrilxu');
