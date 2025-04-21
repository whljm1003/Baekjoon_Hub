function solution(priorities, location) {
  let quete = priorities.map((prioritiy, index) => ({prioritiy, index}));
  let order = 0;
  
  
  while(quete.length > 0) {
    const current = quete.shift();
    if(!current) continue;
    
    const hasHigher = quete.some(item => item.prioritiy > current.prioritiy);
    if(hasHigher) {
      quete.push(current);
    }else {
      order++;
      
      if(current.index === location) {
        return order;
      }
    }
  }
  
}
