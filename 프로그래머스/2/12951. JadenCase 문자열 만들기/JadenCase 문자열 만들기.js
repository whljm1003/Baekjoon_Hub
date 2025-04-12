function solution(s) {
  let answer = '';  
  const arr = s.split(' ');

for(let i = 0 ; i < arr.length ; i++) {
  const target = arr[i].toLowerCase();
  const firstWord = target.substring(0,1).toUpperCase();
  answer += ` ${firstWord + target.substring(1)}`
}
  return answer.substring(1);
}