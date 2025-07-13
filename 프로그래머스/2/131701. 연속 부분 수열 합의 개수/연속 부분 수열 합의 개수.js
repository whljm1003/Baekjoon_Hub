function solution(elements) {
  const n = elements.length;
  const set = new Set();
  const double = elements.concat(elements); 

  for (let i = 1; i <= n; i++) {
    for (let start = 0; start < n; start++) {
      const subArr = double.slice(start, start + i);
      const sum = subArr.reduce((acc, cur) => acc + cur, 0);
      set.add(sum);
    }
  }

  return set.size;
}