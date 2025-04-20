function solution(d, budget) {
    var answer = 0;
    let sum = 0;
    d.sort((a,b) => a-b);
    
    for(const name of d) {
      if(sum + name <= budget) {
        sum += name;  
        answer++;
      }else {
        break;
      }
    }
    
    return answer;
}
