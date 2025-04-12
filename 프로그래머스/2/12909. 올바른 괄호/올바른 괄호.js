// 괄호 (스택 문제)
function solution(s){
  const stack = []
  const arr = s.split('');

  for(let i = 0 ; i< arr.length ; i++) {
    const target = arr[i];
    if(target === ")") {
      if(stack.length === 0) {
        return false;
      }
      stack.pop();
    }
    
    if(target === "(") {
      stack.push(target);
    }

    }
    
  return Boolean(stack.length === 0);
}

