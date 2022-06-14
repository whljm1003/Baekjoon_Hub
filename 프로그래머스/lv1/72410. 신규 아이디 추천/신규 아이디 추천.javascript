function solution(new_id) {
    let answer = new_id
    .toLowerCase() // 1
    .replace(/[^\w-_.]/gm, "") // 2
    .replace(/\.{2,}/gm, ".") // 3
    .replace(/(^\.|\.$)/gm, "") // 4
    .replace(/^$/, 'a') // 5
    .slice(0, 15).replace(/\.$/, ''); // 6
    
    while(answer.length < 3) {
        answer += answer[answer.length-1];    
    } // 7
    
    return answer;
}