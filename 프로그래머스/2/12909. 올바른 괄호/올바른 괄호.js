function solution(s){
    let stack = []

    for(let i = 0 ; i < s.length ; i++) {  
      if(s[i] === "(") {
          stack.push("(")
      }else {
          if(stack.length === 0) {
              return false;
          }
        stack.pop();
      } 
    }
    
    return stack.length === 0;
}
