function duplicateCount(text) {
  const caches = {};

  text.split('').map((x) => {
    const item = x.toLowerCase()
    caches[item] = !caches.hasOwnProperty(item) ? 0 : caches[item] + 1;
  });
  return Object.values(caches).filter(x=>x).length
}
const res = duplicateCount('aabBcde');
console.log('res',res)
