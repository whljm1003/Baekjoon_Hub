function solution(a, b) {
    // let answer = 0;
    // for(let i = 0 ; i < a.length ; i++) {
    //     answer += a[i] * b[i];
    // }
    let answer = a.reduce((acc,cul,index) => acc + a[index]*b[index] ,0)
    
    return answer;
}