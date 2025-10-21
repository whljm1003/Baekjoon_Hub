const students = {
  1 : [1, 2, 3, 4, 5, 1, 2, 3, 4, 5],
  2 : [2, 1, 2, 3, 2, 4, 2, 5, 2, 1, 2, 3, 2, 4, 2, 5],
  3 : [3, 3, 1, 1, 2, 2, 4, 4, 5, 5, 3, 3, 1, 1, 2, 2, 4, 4, 5, 5]
}

function solution(answers) {
    let result = []
    const answer = [0,0,0];
 
  
    for(let i = 0 ; i < answers.length ; i++) {
      if(students[1][i % students[1].length] === answers[i]) answer[0] = answer[0] + 1;
      if(students[2][i % students[2].length] === answers[i]) answer[1] = answer[1] + 1;
      if(students[3][i % students[3].length] === answers[i]) answer[2] = answer[2] + 1;
    }  
  
    const max = Math.max(...answer);
    
  for( let i = 0 ; i < answer.length ; i++) {
    if(answer[i] === max) {
      result.push(i+1);
    }
  }
  
    return result;
}
