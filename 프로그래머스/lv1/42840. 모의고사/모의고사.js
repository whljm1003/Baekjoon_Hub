function solution(answers) {
    let fisrt = [1,2,3,4,5] 
    let second = [2, 1, 2, 3, 2, 4, 2, 5 ]
    let third = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5]
    let temp1 = []
    let temp2 = []
    let temp3 = []
    let result = []
    
     for(let i=0 ; i<answers.length ; i++) {
          if(answers[i] === fisrt[i % 5]) {          
              temp1.push(fisrt[i % 5])
          }
           if(answers[i] === second[i % 8]) {
              temp2.push(second[i % 8])
          }
           if(answers[i] === third[i % 10]) {
              temp3.push(third[i % 10])
          }
    }

    let maxNum = Math.max(temp1.length, temp2.length, temp3.length);
  
        if(temp1.length === maxNum) {
            result.push(1)
            }
        if(temp2.length === maxNum) {
                result.push(2)
            }
        if(temp3.length === maxNum) {
                result.push(3)
            }
    
    return result;
}