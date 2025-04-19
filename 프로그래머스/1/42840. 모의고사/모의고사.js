function solution(answers) {
    const answer = [0, 0, 0];
  
    const first = [1,2,3,4,5];
    const second = [2,1,2,3,2,4,2,5];
    const third = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
  
    for(let i = 0 ; i < answers.length ; i++) {
      if(answers[i] === first[i % first.length]) answer[0]++;
      if(answers[i] === second[i % second.length]) answer[1]++;
      if(answers[i] === third[i % third.length]) answer[2]++;
    }
    
    const max = Math.max(...answer);
    const result = [];
  
    for(let i = 0 ; i < answer.length ; i++) { 
      if(answer[i] === max) result.push(i + 1);
      
    }
    
    return result;
}