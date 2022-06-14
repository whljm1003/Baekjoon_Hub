function solution(new_id) {
    var answer = new_id;
    
    answer = answer.toLowerCase();
    answer = answer.replace(/[^a-z0-9-_.]/gm, "");
    answer = answer.replace(/\.{2,}/gm, ".");
    answer = answer.replace(/(^\.|\.$)/gm, "");
    // answer = answer.replace(/([^a-z0-9-_.]|(^\.|\.$))/gm, "");
    answer = answer.slice(0,15);
      answer = answer.replace(/(^\.|\.$)/gm, "");
 
    if(answer.length === 0) {
        answer = "aaa";
    }
    while(answer.length < 3) {
        answer += answer[answer.length-1];    
    }
        

    
    return answer;
}