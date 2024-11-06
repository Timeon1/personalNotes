var countBits = function (n) {
  return n.toString(2).split('').filter(x=>x == 1).length
};

const res = countBits(2);
