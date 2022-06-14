function solution(new_id) {
    var answer = new_id
    .toLowerCase()
    .replace(/[^\w-_.]/gm, "")
    .replace(/\.{2,}/gm, ".")
    .replace(/(^\.|\.$)/gm, "")
    .replace(/^$/, 'a') // 5
    .slice(0, 15).replace(/\.$/, ''); // 6

    while(answer.length < 3) {
        answer += answer[answer.length-1];    
    }
    return answer;
}