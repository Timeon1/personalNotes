function rgb(r, g, b) {
  return [r,g,b].map(x=> x < 0 ? '00' : x > 255 ? 'FF' : x.toString(16).padStart(2, '0')).join('').toUpperCase();
}