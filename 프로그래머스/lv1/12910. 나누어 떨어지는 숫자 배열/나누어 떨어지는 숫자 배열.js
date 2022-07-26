function solution(arr, divisor) {
    let DividedValue = arr.filter(e => e % divisor === 0);   
    return DividedValue.length !== 0 ? 
        DividedValue.sort((a,b) => a-b) : [-1];
};