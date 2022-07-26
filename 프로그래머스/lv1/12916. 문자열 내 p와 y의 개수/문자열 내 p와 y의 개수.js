function solution(s){
  // 테스트 케이스2,3번 왜 안되지..
  //   let p = s.match(/p/gim);
  //   let y = s.match(/y/gim);
  // return !p || !y ? true : p.length === y.length;
    
  let p = s.split('').filter(e => ['p', 'P'].includes(e));
  let y = s.split('').filter(e => ['y', 'Y'].includes(e));
  return p.length === y.length;
}