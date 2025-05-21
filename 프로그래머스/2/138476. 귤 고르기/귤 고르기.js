function solution(k, tangerine) {
  
  const sizeCountMap = new Map();
  for(const size of tangerine) {
    const target = sizeCountMap.get(size) || 0;
    sizeCountMap.set(size,target + 1);
  }
  
  const sortedCounts = [...sizeCountMap.entries()].sort((a,b) => b[1] - a[1]);
  
  let sum = 0, kinds = 0;
  for(const [key, value] of sortedCounts) {
      sum += value;  
      kinds++;
      if (sum >= k) break;
  }
  return kinds;
}
