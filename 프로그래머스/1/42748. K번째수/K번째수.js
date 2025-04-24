function solution(array, commands) {
    const answer = [];

    for(const [start, end, target] of commands) {
        answer.push(array.slice(start - 1, end).sort((a,b) => a - b)[target - 1]);
    }

    return answer;
}