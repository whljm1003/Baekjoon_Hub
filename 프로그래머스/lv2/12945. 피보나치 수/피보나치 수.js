function solution(n) {
   	const result = [0, 1]; 
    for (let i = 2; i <= n; i++) { 
    	const a = result[i - 1]% 1234567; 
        const b = result[i - 2]% 1234567; 
        result.push(a + b% 1234567); 
    } 
    return result[n] % 1234567; 
}