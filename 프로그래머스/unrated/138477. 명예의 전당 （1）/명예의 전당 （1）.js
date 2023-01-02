function solution(k, score) {
    let answer = []
    let temp = [];
    
    for(let i = 0 ; i < score.length ; i++) {
      temp.push(score[i]);
      temp.sort((a,b) => a-  b);
      if(temp.length > k) {
        temp.shift();
      }
      answer.push(Math.min(...temp));  
    }
    return answer;
}