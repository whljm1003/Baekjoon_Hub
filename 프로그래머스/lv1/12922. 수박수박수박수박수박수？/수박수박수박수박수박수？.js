function solution(n) {
    let answer = '';
    let arr = Array.from({length:n}, (e,i) => i+1)
    for(let x of arr) {
        x%2 === 0 ? answer+='박' : answer+="수"
    }
    return answer;
}