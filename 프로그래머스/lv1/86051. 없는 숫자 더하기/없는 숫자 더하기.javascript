function solution(numbers) {
    let total = 45;
    let sum = numbers.reduce((acc,cur) => acc + cur ,0)
    
    return total - sum;
}

// 1. 0~9까지의 전체 합(45)을 구한다.
// 2. 리턴 => 전체 합 - numbers합 