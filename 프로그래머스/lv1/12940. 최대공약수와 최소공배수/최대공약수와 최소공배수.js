function solution(num1, num2) {
    // 유클리드 호제법
    // R = num1 % num2 
    // GCD(num1, num2) = GCD(num2, R)
    // R = 0 이면, num2가 최대공약수이다.
    // GCD(3, 12) = GCD(12, 3) = GCD(3, 0)

    // 최소 공배수 = (num1 + num2) / 최대공약수
    
    let answer = [0, 0];
    
    const getGCD = (num1, num2) => {
        if(num2 === 0) return num1;
        return getGCD(num2, num1 % num2);
    }
    
    [answer[0], answer[1]] = [getGCD(num1,num2), ( num1 * num2 )/ getGCD(num1,num2)];
    
    return answer;
    
    
}