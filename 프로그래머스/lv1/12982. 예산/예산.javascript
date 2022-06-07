function solution(d, budget) {
    let answer = 0;
    let sum = 0; 
    d.sort((a,b) => a-b);
    
    for(let x of d) {
        sum += x;
        if(sum <= budget) answer++;
        else answer;   
    };
    return answer;
}





// 1. d 를 정렬 => [1,2,3,4,5]
// 2. 각 요소를 한개씩 더해준다.
// 3. (조건) budget보다 작을때까지
// 4. 작다면 리턴. 