function solution(n) {
    let isSqrt = Math.sqrt(n);
    return Number.isInteger(isSqrt) ? Math.pow(isSqrt+1, 2) : -1;
}