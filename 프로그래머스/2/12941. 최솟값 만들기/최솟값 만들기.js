// A = 가장 작은 숫자로 진행
// B = 가장 큰 숫자로 진행

function solution(A,B){
    let answer = 0;
    const DesA = A.sort((a,b) => b-a);
    const AscB = B.sort((a,b) => a-b);
    
    for(let i = 0 ; i < DesA.length ; i++) {
        const data =DesA[i] * AscB[i];
        answer += data;
    }
    return answer;
}