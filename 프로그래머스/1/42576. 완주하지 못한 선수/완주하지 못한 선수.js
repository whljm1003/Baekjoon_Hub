function solution(participant, completion) {
    let answer = '';
    const result = new Map();
    
    // 참여자
    for(let i = 0 ; i < participant.length ; i++) {
        const target = participant[i];
        result.set(target, result.get(target) + 1 || 1);
    }
    
    // 완주자
    for( let i = 0 ; i < completion.length ; i++) {
        const target = completion[i];
        if(result.get(target)) {
            result.set(target, result.get(target) - 1);
        }
    }
        
    // 결과
    result.forEach((value, key) => {
      if(value === 1) answer = key;
    })


    return answer;
}