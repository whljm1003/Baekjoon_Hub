function solution(x, n) {
    let answer = [];
    
    while(n !== 0) {
        answer.unshift(x * n)
        n--;
      }
    
    return answer;
}



