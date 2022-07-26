function solution(x) {
    let sum = `${x}`.split('').reduce((arr,cur) => Number(arr) + Number(cur));
    return x%sum === 0;
}