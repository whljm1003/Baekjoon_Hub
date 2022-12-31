function solution(t, p) {
  let answer = 0;
  let arr = [];

  for(let i = 0 ; i <= t.length - p.length ; i++) {  
    let str = "";
    for(let j = 0 ; j < p.length ; j++) {
      str += t[i+j];
    }
    arr.push(str);
  };
  answer = arr.filter(e => Number(e) <= Number(p)).length;
  return answer;
}

