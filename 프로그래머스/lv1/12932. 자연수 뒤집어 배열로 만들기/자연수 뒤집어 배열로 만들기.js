function solution(n) {
    return `${n}`.
            split('').
            map(e => parseInt(e)).
            reverse();
}