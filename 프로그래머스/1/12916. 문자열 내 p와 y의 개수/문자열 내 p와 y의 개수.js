function solution(s){
    let p = 0;
    let y = 0;
    
    for(let i = 0 ; i <s.length ; i ++) {
      const target = s.toLowerCase();      
    
        if(target[i] === "p") {
            p++;
        }else if(target[i] === "y") {
            y++;
        }
    }
      
    return p === y;
}