//위와 같은 원리
function solution(n) {
  let s = new Set([2]);
  
  //짝수는 소수 일수가 없음
  for (let i=3; i<=n; i+=2) {
    s.add(i);
  }
  
  for (let j = 3; j ** 2 < n; j++) {
    if (s.has(j)) {
      for (let k = j ** 2; k <= n; k += j) {
        s.delete(k);
      }
    }
  }
  return s.size;
}