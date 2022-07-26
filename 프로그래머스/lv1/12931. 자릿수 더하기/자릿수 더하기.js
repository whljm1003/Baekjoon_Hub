function solution(n) {
    return `${n}`.split('').reduce((arr,cur) => 
            arr + +cur, 0);
}