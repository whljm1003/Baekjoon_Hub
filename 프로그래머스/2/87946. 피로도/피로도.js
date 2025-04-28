function solution(k, dungeons) {
    let answer = 0;    
    const visited = new Array(dungeons.length).fill(false);
    
    function dfs(currentFatigue, count) {
       answer = Math.max(answer, count) 
      
      for(let i = 0 ; i < dungeons.length ; i++) {
        const [need, consum] = dungeons[i];

        if(!visited[i] && currentFatigue >= need) {
          visited[i] = true;
          dfs(currentFatigue - consum, count + 1)  
          visited[i] = false;
        }        
      }
    } 
    
    dfs(k, 0)
    
    return answer;
}
