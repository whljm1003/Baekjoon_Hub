// 괄호 (스택 문제)
function solution(s){
  const stack = []

  for(let i = 0 ; i< s.length ; i++) {
    const target = s[i];
    
    if(target === ")") {
      if(stack.length === 0) return false;
      stack.pop();
    } else if(target === "(") {
      stack.push(target);
    }

    }
    
  return Boolean(stack.length === 0);
}

