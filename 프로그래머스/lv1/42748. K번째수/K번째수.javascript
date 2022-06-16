function solution(array, commands) {
    let answer = [];
    
    for(let i = 0 ; i < commands.length ; i++) {
        let start = commands[i][0], end = commands[i][1], target =commands[i][2]
        let sortArr = array.slice(start-1, end).sort((a,b) => a-b);
        answer.push(sortArr[target-1])
    }
    
    return answer;
}