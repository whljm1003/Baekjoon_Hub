function solution(num) {
  let answer = 0;
  const recur = (num) => {
    answer++;
    if(num === 1) return answer -= 1;
    if(answer === 501) return answer = -1;
    return num % 2 === 0 ? recur(num/2) : recur(num*3+1);
    }
  recur(num);
  return answer;
};