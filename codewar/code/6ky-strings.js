// Test.assertEquals(["foobar",[["hello"]]].toString(), "['foobar',[['hello']]]", "Should enclose strings with single quotes");

Boolean.prototype.toString = Number.prototype.toString = function () {
  return "'" + this + "'";
};


function toStringA(arr) {
  if (!Array.isArray(arr)) {
    throw new Error('ss');
  }
    console.log('value', arr)
  function stringify(value) {
    if (Array.isArray(value)) {
      if (value.length == 0) return '[]';
      if (value == [[]]) return '[[]]';
      return toStringA(value);
    } else if (typeof value == 'string') {
      return "'"+value+"'";
    } else if (typeof value == 'boolean') {
      return value;
    } else if(typeof value == 'number') {
      return value
    } else {
      throw new Error('rrrror', this);
    }
  }
  console.log('arr', arr);
  return `[${arr.map(stringify).join(',')}]`;
}

Array.prototype.toString = function () {
  return toStringA(this);
};

console.log('[[[[[[]]],[]]]].toString()', [[[[[[]]], []]]].toString());
console.log('[ true ]', [ true ].toString());

return;

// Expected: '[1.545,[2,4,[23532],55,2.3,[15.22,0.3,[],[[72,3],5]]]]', 
//           '[\'1.545\',[\'2\',\'4\',[\'23532\'],\'55\',\'2.3\',[\'15.22\',\'0.3\',[],[[\'72\',\'3\'],\'5\']]]]'

const isDouble = function (arr) {
  return arr.some((item) => {
    return Array.isArray(item);
  });
};
Array.prototype.toString = function () {
  // return JSON.stringify(this).replaceAll('"',"'")

  if (this.length == 0) return this;
  let strFlag = false;
  const arr = this.map((item) => {
    if (typeof item == 'string') {
      strFlag = true;
      return "'" + item + "'";
    } else if (typeof item == 'object' && isDouble(item)) {
      console.log('11', item[0]);

      return `[${item.map(stringifyElement).join(',')}]`;
    } else {
      return item;
    }
  });

  // console.log('arr', '"[' + arr.join(', ') + ']"', '[' + arr.join(',') + ']' === "['Hello World',3.14,'Lorem Ipsum']");
  return strFlag ? '"[' + arr.join(',') + ']"' : "'[" + arr.join(',') + "]'";
};

[[[[[[]]], []]]];

// ["Hello World",3.14,"Lorem Ipsum"].toString() === "['Hello World',3.14,'Lorem Ipsum']"

// console.log('2', ["Hello World",3.14,"Lorem Ipsum"].toString())

// Expected: '[1.545,[2,4,[23532],55,2.3,[15.22,0.3,[],[[72,3],5]]]]',
//           '"[1.545,"[2,4,"[23532]",55,2.3,"[15.22,0.3,[],"["[72,3]",5]"]"]"]"'

console.log('ws', [[[[[[]]], []]]].toString(), [[[[[[]]], []]]].toString() === '[[[[[[]]],[]]]]');
// console.log('ws', [ [[[[[]]],[]]] ].toString()  , [[[[[[]]],[]]]].toString() === "[[[[[[]]],[]]]]");

// '[\'foobar\',[[\'hello\']]]'
// '["foobar",[["hello"]]]'
// ["foobar",[["hello"]]].toString()
