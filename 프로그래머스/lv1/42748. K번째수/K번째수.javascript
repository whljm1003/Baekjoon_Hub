function solution(array, commands) {
    let answer = [];
    
    for(let i = 0 ; i < commands.length ; i++) {
        const [start, end, target] = commands[i];
        let sortArr = array.slice(start-1, end).sort((a,b) => a-b);
        answer.push(sortArr[target-1]);
    }
    
    return answer;
}