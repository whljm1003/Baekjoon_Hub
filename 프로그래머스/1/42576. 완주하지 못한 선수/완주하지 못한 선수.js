function solution(participant, completion) {
    const map = new Map();
    
    // 참여자
    for(const name of participant) {
        const count = map.get(name) || 0;
        map.set(name,count + 1);
    }
    
    // 완주자
    for(const name of completion) {
      map.set(name, map.get(name) - 1);
    }
  
    // 결과
    for(const [name, count] of map.entries()) {
      if(count > 0) return name;
    }
}
