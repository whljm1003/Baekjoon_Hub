function solution(a, b) {
    //  1. a와 b를 비교
    //  2. 숫자가 더 큰 파라미터만큼 반복한다
    //  3. 반복하면서 사이 숫자를 더해준다
    let answer = 0;
    if(a < b) {
        for(let i=a ; i<=b ; i++) {
            answer = answer + i;
        }
    }else {
            for(let i=b ; i<=a ; i++) {
            answer = answer + i;
        };
    }
    return answer;
}