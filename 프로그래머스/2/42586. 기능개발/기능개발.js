 function recur(progresses, speeds,result) {
      let progressesCopy = [...progresses];
      let speedsCopy = [...speeds] 

      if(progressesCopy.length === 0) {
        return result;
      }

    while(progressesCopy[0] < 100) {
      for(let i = 0 ; i < progressesCopy.length ; i++) {
        progressesCopy[i] = progressesCopy[i] + speedsCopy[i];
      }
    }

    let count = 0

    for(let i = 0 ; i < progressesCopy.length ; i++) {
      if(progressesCopy[i] >= 100) {
        count++;
        i -= 1;
        progressesCopy.shift();
        speedsCopy.shift();
      } else {
        break;
      }
    }
    result.push(count);

    return recur(progressesCopy,speedsCopy,result)
  }

function solution(progresses, speeds) {
  let result = []
  
  return recur(progresses,speeds,result)

}

