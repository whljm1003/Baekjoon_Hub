function solution(array, commands) {
    var answer = [];

    for(let i = 0 ; i < commands.length ; i++) {
        const start = commands[i][0] - 1;
        const end = commands[i][1];
        const target = commands[i][2] - 1;
        
        answer.push(array.slice(start,end).sort((a,b) => a - b)[target])
    }

    return answer;
}

