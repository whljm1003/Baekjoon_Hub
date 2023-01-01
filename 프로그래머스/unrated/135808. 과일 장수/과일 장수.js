function solution(k, m, score) {
    let answer = 0;
    const length = Math.floor(score.length / m);
    score.sort((a,b) => b - a);
  
    for(let i = 0 ; i < length ; i++) {
      answer += score[(m * (i+1)) - 1] * m;
      // const cutArr = score.slice(0, m);
      // const minValue = cutArr[cutArr.length - 1];
      // answer += minValue * m;
      // score.splice(0,m);  
    }
    return answer;
}