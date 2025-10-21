function solution(s){
    const stack = [];
  
    for(const alphabet of s) {
      const target = stack.at(-1);
      alphabet === target ? stack.pop() : stack.push(alphabet);
    }
    
  

    return stack.length === 0 ? 1 : 0;
}
